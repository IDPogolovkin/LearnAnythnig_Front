import React from 'react'
import Profile from '../../Profile/Profile'
import { Routes, Route } from 'react-router-dom'
import BookList from '../BookList/BookList'
import Book from '../Book/Book'
const UserDashboard = () => {
    return (
        <Routes>
            <Route path="profile" element={<Profile />} />
            <Route path="book" element={<Book />} />
        </Routes>
    )
}

export default UserDashboard
