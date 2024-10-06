//task 1 
//just the company details 
const company = {
    departments: [
        {
            departmentName:'Engineering',
            employees:[
                {
                    name:'Alice',
                    salary: 100000,
                    subordinates: [
                        {
                            name: 'Bob',
                            salary: 80000,
                            subordinates: [
                                {
                                    name: 'Charlie',
                                    salary: 60000,
                                    subordinates: []

                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'David',
                    salary: 90000,
                    subordinates: []
    
                }
            ]
        },
        {
            departmentName: 'Sales',
            employees: [
                {
                    name: 'Eve',
                    salary: 85000,
                    subordinates: [
                        {
                            name: 'Frank',
                            salary: 70000,
                            subordinates: []


                        }
                    ]
                },
                {
                    name: 'Grace',
                    salary: 95000,
                    subordinates:[]

                }
            ]
            
        }
    ]
};

//task 2
//setting up the function
function calculateDepartmentSalary(departmentName) {
    let totaldepartmentsalary = employees.salary;

    for(let subordinates of employees.subordinates) {
        departmentsalary += calculateDepartmentSalary(subordinates);
}
    return totaldepartmentsalary;
}
 //calcuate the salarys per department 
const totalEngineeringSalary= calculateDepartmentSalary ('Engineering');
const totalSalesSalary= calculateDepartmentSalary ('Sales');

//output
console.log('Sales Salary $${totalEnginneringSalary');
console.log ('Engineering Salary $${totalSalesSalary');


