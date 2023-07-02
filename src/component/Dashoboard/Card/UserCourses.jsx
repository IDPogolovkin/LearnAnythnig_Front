import React from 'react'
import Container from '@material-ui/core/Container';
import Course from './Card';


function UserCourses(props) {

    return (
        <div>
            <Container>
                {props?.data?.student?.course?.map(course => (
                    <Course key={course.id} {...course} />
                ))}
            </Container>
        </div>
    )
}

export default UserCourses