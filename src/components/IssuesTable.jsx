import { getDatabase, onValue, ref, set } from "firebase/database";



function IssuesTable() {

    const database = getDatabase();
    const dbRef = ref(database, 'Users' + '/');
    onValue(dbRef, (snapshot) => {
        if(snapshot.exists)
            console.log(snapshot.val());
        else
            console.log("Not Val");
    });
   




    return (
        <div className='mt-12'>
            <h1 className='text-4xl font-bold'>Issues</h1>
            <table className="mt-8 table-auto border">
                <thead className="border">
                    <tr>
                        <th className="border p-5">Id</th>
                        <th className="border p-5">Title</th>
                        <th className="border p-5">Description</th>
                        <th className="border p-5">Created on</th>
                        <th className="border p-5">Assigned to</th>
                        <th className="border p-5">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="border p-3">Id</th>
                        <th className="border p-3">Title</th>
                        <th className="border p-3">Description</th>
                        <th className="border p-3">Created on</th>
                        <th className="border p-3">Assigned to</th>
                        <th className="border p-3">Status</th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}


export default IssuesTable;