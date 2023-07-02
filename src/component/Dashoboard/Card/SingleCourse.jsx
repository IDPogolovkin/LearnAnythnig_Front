import { Button, List, ListItem, ListSubheader, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

function SingleCourse(props) {
    console.log('first', props.id)
    return (
        <div>
            <List>
                {props?.data?.student?.course?.map((course) => (
                    <ListItem nested key={course.id}>
                        <Typography >{course.name}</Typography>
                        <List>
                            {course?.topic?.map((topic) => (
                                <ListItem key={topic.id}>
                                    {
                                        topic?.is_opened ?
                                            <>
                                                <Link to={`${topic?.id}`}>
                                                    <Button >{topic.name}</Button>
                                                </Link >
                                            </>
                                            :
                                            <Button disabled>{topic.name}</Button>

                                    }
                                </ListItem>
                            ))}
                        </List>
                    </ListItem>
                ))
                }
            </List >
        </div >
    )
}

export default SingleCourse