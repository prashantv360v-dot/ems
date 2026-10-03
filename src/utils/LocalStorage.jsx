

const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "employee1@example.com",
    password: "1234",

    taskSummary: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Homepage",
        taskDescription: "Create a responsive homepage design for the company website.",
        taskDate: "2026-09-28",
        category: "Design"
      },
      {
        taskNumber: 2,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Login Bug",
        taskDescription: "Fix the login validation issue on the employee portal.",
        taskDate: "2026-09-29",
        category: "Development"
      },
      {
        taskNumber: 3,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Documentation",
        taskDescription: "Update the project documentation with the latest features.",
        taskDate: "2026-09-26",
        category: "Documentation"
      },
      {
        taskNumber: 4,
        active: false,
        newTask: true,
        completed: false,
        failed: true,
        taskTitle: "Create Dashboard",
        taskDescription: "Build the employee dashboard with task statistics.",
        taskDate: "2026-09-27",
        category: "Development"
      }
    ]
  },

  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "1234",

    taskSummary: {
      active: 2,
      newTask: 2,
      completed: 2,
      failed: 1
    },

    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create API",
        taskDescription: "Develop API endpoints for employee management.",
        taskDate: "2026-09-28",
        category: "Backend"
      },
      {
        taskNumber: 2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Setup",
        taskDescription: "Configure the database and create required tables.",
        taskDate: "2026-09-25",
        category: "Database"
      },
      {
        taskNumber: 3,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "API Testing",
        taskDescription: "Test all employee API endpoints and fix errors.",
        taskDate: "2026-09-29",
        category: "Testing"
      },
      {
        taskNumber: 4,
        active: false,
        newTask: true,
        completed: false,
        failed: true,
        taskTitle: "Add Authentication",
        taskDescription: "Implement authentication for admin and employee users.",
        taskDate: "2026-09-26",
        category: "Security"
      },
      {
        taskNumber: 5,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review the backend code and suggest improvements.",
        taskDate: "2026-09-27",
        category: "Review"
      }
    ]
  },

  {
    id: 3,
    firstName: "Amit",
    email: "employee3@example.com",
    password: "1234",

    taskSummary: {
      active: 3,
      newTask: 2,
      completed: 2,
      failed: 1
    },

    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Landing Page",
        taskDescription: "Develop a modern landing page for the new product.",
        taskDate: "2026-09-28",
        category: "Frontend"
      },
      {
        taskNumber: 2,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Responsive Design",
        taskDescription: "Make the website responsive for mobile and tablet devices.",
        taskDate: "2026-09-29",
        category: "Frontend"
      },
      {
        taskNumber: 3,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix CSS Issues",
        taskDescription: "Resolve layout and styling issues on the website.",
        taskDate: "2026-09-26",
        category: "CSS"
      },
      {
        taskNumber: 4,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Add Animations",
        taskDescription: "Add smooth animations to buttons and page sections.",
        taskDate: "2026-10-01",
        category: "UI/UX"
      },
      {
        taskNumber: 5,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Optimize Images",
        taskDescription: "Compress and optimize website images for faster loading.",
        taskDate: "2026-09-24",
        category: "Optimization"
      },
      {
        taskNumber: 6,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Build Contact Page",
        taskDescription: "Create a contact page with a working contact form.",
        taskDate: "2026-09-23",
        category: "Frontend"
      }
    ]
  },

  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@example.com",
    password: "1234",

    taskSummary: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Test Cases",
        taskDescription: "Prepare test cases for the employee management system.",
        taskDate: "2026-09-28",
        category: "Testing"
      },
      {
        taskNumber: 2,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Run Functional Tests",
        taskDescription: "Perform functional testing on all major features.",
        taskDate: "2026-09-29",
        category: "Testing"
      },
      {
        taskNumber: 3,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Report",
        taskDescription: "Prepare a report of all bugs discovered during testing.",
        taskDate: "2026-09-25",
        category: "QA"
      },
      {
        taskNumber: 4,
        active: false,
        newTask: true,
        completed: false,
        failed: true,
        taskTitle: "Regression Testing",
        taskDescription: "Perform regression testing after the latest updates.",
        taskDate: "2026-09-24",
        category: "QA"
      }
    ]
  },

  {
    id: 5,
    firstName: "Vikash",
    email: "employee5@example.com",
    password: "1234",

    taskSummary: {
      active: 3,
      newTask: 3,
      completed: 2,
      failed: 1
    },

    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Marketing Plan",
        taskDescription: "Create a marketing plan for the upcoming product launch.",
        taskDate: "2026-09-28",
        category: "Marketing"
      },
      {
        taskNumber: 2,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Social Media Post",
        taskDescription: "Create social media content for the product campaign.",
        taskDate: "2026-09-29",
        category: "Marketing"
      },
      {
        taskNumber: 3,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Competitor Research",
        taskDescription: "Research competitors and analyze their products.",
        taskDate: "2026-09-26",
        category: "Research"
      },
      {
        taskNumber: 4,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Email Campaign",
        taskDescription: "Prepare an email campaign for existing customers.",
        taskDate: "2026-10-01",
        category: "Marketing"
      },
      {
        taskNumber: 5,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Report",
        taskDescription: "Prepare the monthly marketing performance report.",
        taskDate: "2026-09-27",
        category: "Reporting"
      },
      {
        taskNumber: 6,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Customer Feedback",
        taskDescription: "Collect and analyze feedback from customers.",
        taskDate: "2026-09-23",
        category: "Research"
      },
      {
        taskNumber: 7,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Campaign Planning",
        taskDescription: "Plan the next promotional campaign with the marketing team.",
        taskDate: "2026-10-03",
        category: "Planning"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    firstName: "Prashant",
    email: "admin@example.com",
    password: "1234"
  }
];





export const setLocalStorage = () =>{
  if(!localStorage.getItem('employees'))
  {
    localStorage.setItem('employees',JSON.stringify(employees))
     localStorage.setItem('admin',JSON.stringify(admin))
}
}
export const getLocalStorage = () =>{
   const employees = JSON.parse(localStorage.getItem('employees'))
       const admin = JSON.parse(localStorage.getItem('admin'))

       return {employees, admin}
        
   
   
}