import axios from "axios";
import {useEffect, useState} from "react";
import Card from "../components/Card.jsx";
import {Link, useNavigate, useParams} from "react-router-dom";
import Loading from "../components/Loading.jsx";
import {FiGrid, FiList} from "react-icons/fi";


const Home = () => {
    const [value, setValue] = useState([])
    const [loading, setLoading] = useState(true)
    const [isGrid, setGrid] = useState(true)
    const navigate = useNavigate();


    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        if (JSON.parse(localStorage.getItem('user')) != null) {
            const userId = JSON.parse(localStorage.getItem('user')).user._id;
            try {
                const response = await axios.get(`http://localhost:4000/${userId}/projects`);
                setValue(response.data.data);
                setLoading(false)
            } catch (error) {
                console.error('Error fetching data: ', error);
                setLoading(false)
            }
        } else {
            navigate('/signin');
        }
    };

    if (loading) {
        return <Loading/>
    }

    const chageView = () => {
        isGrid ? setGrid(false) : setGrid(true);
    }

    return (
        <div className={'container mx-auto mt-16'}>
            <div className={'flex content-center w-full justify-between'}>
                <h1 className={'font-medium text-2xl'}>All Projects</h1>
                <div className={'flex items-center justify-between'}>
                    <button className="px-4 py-4 rounded-full text-blue-500 hover:bg-gray-200 me-2" onClick={chageView}>
                        {isGrid ? <FiList/> : <FiGrid/>}
                    </button>
                    <Link to={'project/new'}
                          className="bg-blue-500 my-2 px-4 py-2 rounded-full text-white hover:bg-blue-400">
                        Add
                    </Link>
                </div>
            </div>

            {
                isGrid
                    ?
                    <div className={'flex gap-3 mt-8'}>
                        {value.map(item => (
                            <div key={item._id}>
                                <Card title={item.title} desc={item.description} goTo={`/project/` + item._id}/>
                            </div>
                        ))}
                    </div>
                    :
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg text-left gap-5 mt-8">
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
                                    Quick Actions
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {value.map(item => (
                                <tr key={item._id}>
                                    <th scope="col" className="px-6 py-3 text-blue-500">
                                        {item.title}
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        {item.description}
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <Link to={'/project/' + item._id}>View Issues</Link>
                                    </th>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

            }
            {/*{value.map(item => (*/}
            {/*    <div key={item._id}>*/}
            {/*        <Card title={item.title} desc={item.description} goTo={`/project/` + item._id}/>*/}
            {/*    </div>*/}
            {/*))}*/}

        </div>
    )
}

export default Home