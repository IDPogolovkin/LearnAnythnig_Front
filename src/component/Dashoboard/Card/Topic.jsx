import { Button, Typography, Modal } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Quizes from '../../Quizes/Quizes';
import axiosInstance from '../../../axios';
import QuizesFinal from '../../Quizes/QuizesFinal';


function Topic(props) {
  const { id, topic_id } = useParams();
  const courseId = parseInt(id, 10)
  const topicId = parseInt(topic_id, 10)
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }


  const [data, setData] = useState({})
  const getData = () => {
    axiosInstance('data/').then((response) => {
      console.log(response)
      setData(response.data[0])
    }).catch((error) => {
      console.error(error)
    })
  }


  console.log('data', data)
  const [topics, setTopic] = useState([])
  const [quiz, setQuiz] = useState({})

  const getQuiz = (topic_id) => {
    axiosInstance.post('quiz-data/', { "topic_id": topic_id }).then((response) => {
      setQuiz(response.data)
    })
    console.log('topics', topics)
  }

  useEffect(() => {
    getData()
    getQuiz(topicId)
    setTopic(data?.student?.course[courseId - 1]?.topic)

  }, [])


  return (
    <div>
      {topics?.map(topic =>
        <>{
          topic?.video?.map(video =>
            <iframe width="713" height="401" src={video?.link} title="Разработай 6 проектов на ReactJS (для начинающих)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          )}
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
        <QuizesFinal questions={quiz.question} topic_id={topicId} />
      </Modal>
    </div>
  )
}

export default Topic