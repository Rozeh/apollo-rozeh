import patients from '../database/patients';

const resolvers = { 
    Query: {
        patients: () => patients,
        patient: (_, { id }) => {
            return patients.filter( patient => patient.id === id)[0];
        }
    },
    Mutation: {
        addPatient: (_, { name, email }) => {
            //email 중복검사
            if (patients.find( patient => patient.email === email )) return null;

            //데이터 베이스 추가

            const newPatient = {
                id: patients.lenth + 1,
                name,
                email
            };
            patients.push(newPatient);
            return newPatient;
        }
    }
}

export default resolvers;