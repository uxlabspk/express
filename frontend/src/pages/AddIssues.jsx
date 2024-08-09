import {Link, useParams} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import Loading from "../components/Loading.jsx";


const AddIssues = () => {
    let { user, id } = useParams();
    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        assignedTo: "",
        status: "New",
        createdAt: "1990-05-15T00:00:00.000+00:00",
        projectId: id
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        // console.log(formData)

        // Make POST request using Axios
        axios.post(`http://localhost:4000/${user}/project/${id}/issues`, formData)
            .then(response => {
                // Handle success, e.g. update state or inform user
                console.log('Response:', response.data);
                setLoading(false)
            })
            .catch(error => {
                // Handle error, e.g. show error message
                console.error('Error:', error);
                setLoading(false)
            });
    };


    if (loading)
        return <Loading />

    return(
        <div className={'mx-auto container'}>
            <form className="max-w-sm mx-auto mt-12" onSubmit={handleSubmit}>
                <h1 className={'text-2xl p-5 font-medium text-center'}>Create new issue</h1>
                <div className="mb-5">
                    <label
                        htmlFor="projectTitle"
                        className="block mb-2 text-sm font-medium text-gray-900">
                        Title*
                    </label>
                    <input
                        type="text"
                        id="projectTitle"
                        required={true}
                        name={'title'}
                        value={formData.title}
                        onChange={handleInputChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="projectDescription"
                        className="block mb-2 text-sm font-medium text-gray-900">
                        Description*
                    </label>
                    <textarea
                        rows={8}
                        type="text"
                        id="projectDescription"
                        required={true}
                        name={'description'}
                        value={formData.description}
                        onChange={handleInputChange}
                        className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"/>
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="assignedTo"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Assigned to*
                    </label>
                    <input
                        type="text"
                        id="assignedTo"
                        required={true}
                        name={'assignedTo'}
                        value={formData.assignedTo}
                        onChange={handleInputChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="projectStatus"
                        className="block mb-2 text-sm font-medium text-gray-900">
                        Status*
                    </label>
                    <select
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        name={'status'}
                        value={formData.status}
                        onChange={handleInputChange} >
                            <option value="New">New</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full block text-white bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Create
                </button>
            </form>
        </div>
    )
}


export default AddIssues







