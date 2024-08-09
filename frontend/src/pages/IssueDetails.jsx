import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import Card from "../components/Card.jsx";
import Loading from "../components/Loading.jsx";


const IssueDetails = () => {
    const [value, setValue] = useState([])
    const [loading, setLoading] = useState(true)
    let { id, issueId } = useParams();

    useEffect(() => {
        fetchData()
    }, [id, issueId])

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/project/${id}/issues/${issueId}`)
            setValue(response.data.issue)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    if (loading)
        return <Loading />

    return (
        <div className={'container mx-auto mt-16'}>
            <div className={'flex content-center w-full justify-between py-2'}>
                <input value={value.title}
                       className={'font-medium text-2xl'}/>
                <button className="bg-blue-500 my-2 px-4 py-2 rounded-full text-white hover:bg-blue-400">Add</button>
            </div>
            <div className={'flex flex-col items-center justify-center'}>
                <textarea
                    value={value.description}
                    rows={10}
                    className={'appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'}/>

                <input
                    value={value.assignedTo}
                    className={'appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'}/>

                <select className={'bg-gray-100 p-2 rounded'} defaultValue={value.status} >
                    <option value="New">New</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>

                <input
                    value={value.createdAt}
                    className={'appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'}/>
            </div>
        </div>
    )
}


export default IssueDetails







