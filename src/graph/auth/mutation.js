
import gql from 'graphql-tag'



export const SIGNIN_USER_MUTATION = gql`

mutation ($email:String!,$password:String!){
	tokenAuth(email:$email, password:$password){
		token
		user{

			id
		}
		
	}
}
`;

// export const REGISTER_USER_MUTATION  = gql `

// mutation ($fullName:String!, $email:String!, $password:String!){

	
	
// }

// `;