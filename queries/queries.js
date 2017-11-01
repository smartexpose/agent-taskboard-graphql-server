// Get tasks for a given agent_id

{
    allTasks(filter: { agent_id: "7ad38d22-6343-48de-8ef6-f8804434a785" }) {
       id
       agent_id
       customer_id
       project_id
       leadid
       status
       reachedcounter
       start
       end
       created
       modified
       closed
       Customer {
         User {
            Userprofiles {
               id
               firstname
               lastname
               salutation
               phone
               mobile
               company
           }
         }
       }
       Project {
          name
          openImmoId
          created
          expires
          modified
       }
       
   }
 }