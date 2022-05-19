import React,{useState, useEffect} from "react";

const Members = () => {
  const [members, setMembers] = useState(null)

  useEffect(() => {
     fetch("https://fakerapi.it/api/v1/persons?_quantity=10")
       .then((response) => response.json())
       .then((data) => setMembers(data.data));
   }, []);

   return (
     <>
       <div className="flex flex-col">
         <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
           <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
             <div className="overflow-hidden">
               <table className="min-w-full text-center">
                 <thead className="border-b bg-gray-800">
                   <tr>
                     <th
                       scope="col"
                       className="text-sm font-medium text-white px-6 py-4">
                       #
                     </th>
                     <th
                       scope="col"
                       className="text-sm font-medium text-white px-6 py-4">
                       Full name
                     </th>
                     <th
                       scope="col"
                       className="text-sm font-medium text-white px-6 py-4">
                       email
                     </th>
                     <th
                       scope="col"
                       className="text-sm font-medium text-white px-6 py-4">
                       phone number
                     </th>
                     <th
                       scope="col"
                       className="text-sm font-medium text-white px-6 py-4">
                       gender
                     </th>
                     <th
                       scope="col"
                       className="text-sm font-medium text-white px-6 py-4">
                       image
                     </th>
                   </tr>
                 </thead>
                 <tbody>
                   {members &&
                     members.map((member, index) => (
                       <tr className="bg-white border-b" key={index}>
                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                           {member.id}
                         </td>
                         <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                           {member.firstname} {member.lastname}
                         </td>
                         <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                           {member.email}
                         </td>
                         <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                           {member.phone}
                         </td>
                         <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                           {member.gender}
                         </td>
                         <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                           <div className="flex justify-center">
                             <img
                               src={member.image}
                               className="h-10 w-10 rounded-full"
                               alt=""
                             />
                           </div>
                         </td>
                       </tr>
                     ))}
                 </tbody>
               </table>
             </div>
           </div>
         </div>
       </div>
     </>
   );
};

export default Members;