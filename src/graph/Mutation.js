
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