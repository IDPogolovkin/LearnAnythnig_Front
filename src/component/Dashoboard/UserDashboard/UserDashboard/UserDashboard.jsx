import React, { useEffect, useState } from 'react'
import Profile from '../../Profile/Profile'
import { Routes, Route } from 'react-router-dom'
import UserCourses from '../../Card/UserCourses'
import SingleCourse from '../../Card/SingleCourse'
import axiosInstance from '../../../../axios'
import Topic from '../../Card/Topic'


const UserDashboard = () => {

    const [data, setData] = useState({})
    const getData = () => {
        axiosInstance('data/').then((response) => {
            console.log(response)
            setData(response.data[0])
        }).catch((error) => {
            console.error(error)
        })
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <Routes>
            <Route path="profile" element={<Profile data={data} />} />
            <Route path="courses" element={<UserCourses data={data} />} />
            <Route path="courses/:id" element={<SingleCourse data={data} />} />
            <Route path="courses/:id/:topic_id" element={<Topic data={data} />} />
        </Routes>
    )
}

export default UserDashboard
