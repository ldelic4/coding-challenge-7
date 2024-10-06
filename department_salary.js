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
//thism is will get the salary 
function calculateDepartmentSalary(departmentName) {
    let departmentsalary = departmentName.salary;

    for(let subordinates of company.subordinates) {
        departmentsalary += calculateDepartmentSalary(subordinates);
}
    return departmentsalary;
}
// finding salary of sales department
const departmentsalary = calculateDepartmentSalary ('Sales');
console.log ('Department salary for Sales teams is: $${departmensalary}');

