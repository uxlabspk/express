import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import Loading from "../components/Loading.jsx";


const Issues = () => {
    const [value, setValue] = useState([])
    const [loading, setLoading] = useState(true)
    let { id } = useParams();

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/${user}/project/${id}/issues`)
            console.log(`http://localhost:4000/project/${id}/issues`)
            setValue(response.data.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    if (loading)
        return <Loading />

    return (
        <div className={'flex flex-col container mx-auto mt-16 gap-3'}>
            <div className={'flex content-center w-full justify-between'}>
                <h1 className={'text-2xl py-3'}>All Issues</h1>
                <Link to={'new'} className="bg-blue-500 my-2 px-4 py-2 rounded-full text-white hover:bg-blue-400">
                    Add
                </Link>
            </div>
            <div className={'text-left gap-5 mt-8'}>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead
                            className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Issue Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Issue Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Assigned To
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Created On
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Quick Actions
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {value.map(item => (
                            <tr key={item._id}>
                                <th scope="col" className="px-6 py-3 text-blue-500">
                                    <Link to={`/project/${id}/issues/${item._id}`}>
                                        {item.title}
                                    </Link>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    {item.description}
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    {item.assignedTo}
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <select className={'bg-gray-100 p-2 rounded'} defaultValue={item.status}>
                                        <option value="New">New</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    {item.createdAt}
                                </th>
                                <th scope="col" className="px-6 py-3 flex items-center justify-start gap-3">
                                    <Link to={'/'} >sdf</Link>
                                    <Link to={'/'} >sdf</Link>
                                </th>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}


export default Issues