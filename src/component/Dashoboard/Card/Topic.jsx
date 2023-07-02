import { Button, Typography, Modal } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Quizes from '../../Quizes/Quizes';
import axiosInstance from '../../../axios';


function Topic(props) {
  const { id, topic_id } = useParams();
  const courseId = parseInt(id, 10)
  const topicId = parseInt(topic_id, 10)
  const [open, setOpen] = useState(false)
  const data = props.data
  const handleClose = () => {
    setOpen(false)
  }

  console.log('data', data)
  console.log('data_student', data?.student?.course[courseId - 1]?.topic[topicId - 1]?.quiz[0].question)
  const [topics, setTopic] = useState([])
  const [quiz, setQuiz] = useState({})

  const getQuiz = (topic_id) => {
    axiosInstance.post('quiz-data/', { "topic_id": topic_id }).then((response) => {
      setQuiz(response.data)
    })
  }

  console.log('quiz', quiz)
  useEffect(() => {
    setTopic(data?.student?.course[courseId - 1].topic)
    console.log("adadawdaw", data?.student?.course[courseId - 1])
    getQuiz(topicId)
  }, [])


  return (
    <div>
      {topics?.map(topic =>
        <>{
          topic.id === topicId ?
            topic?.video?.map(video =>
              <iframe width="713" height="401" src={video?.link} title="Разработай 6 проектов на ReactJS (для начинающих)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            ) : null}
        </>

      )}
      {topics?.map(topic =>
        <>{
          topic.id === topicId ?
            topic?.source?.map(source =>
              <a href={source?.link}>Link {source?.id}</a>
            ) : null
        }</>

      )}
      <Button type='Button' onClick={() => setOpen(true)}>Take a Quiz</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Quizes questions={quiz.question} />
      </Modal>
    </div>
  )
}

export default Topic