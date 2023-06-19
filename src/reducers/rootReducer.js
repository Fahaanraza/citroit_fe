import getDeepCopy from '../utils/getDeepCopy';


export default (initalState) => (state, action) => {
 switch (action.type) {
 case 'LOGIN':
   const newState = {
     auth: {
       isLoggedIn: true,
       user: action.user
     },
     companies: action.companies,
     currentUserCompany: action.currentUserCompany,
     roleConfig: action.roleConfig,
     roleGroups: action.roleGroups
   };


   localStorage.setItem('fdstate', JSON.stringify(newState));


   return newState;


 case 'LOGOUT':
   localStorage.removeItem('fdstate');


   return {
     ...state,
     auth: {
       isLoggedIn: false,
       user: null
     },
     companies: null,
     currentUserCompany: null,
     roleConfig: null,
     roleGroups: null
   };


 case 'OVERRIDE_PERMISSION':
   let updatedState = {
     ...state,
     auth: {
       user: getDeepCopy(action.user)
     }
   };
  
   localStorage.setItem('fdstate', JSON.stringify(updatedState));
   return updatedState;


 case 'SETTINGS_UPDATE':
   let newSettings = {
     ...state,
     currentUserCompany: getDeepCopy(action.currentUserCompany)
   };
    localStorage.setItem('fdstate', JSON.stringify(newSettings));
   return newSettings;
  case 'ROLE_UPDATE':
   // update in local storage
   const newUpdatedState = {
     ...state,
     roleConfig: getDeepCopy(action.roleConfig)
   };


   localStorage.setItem('fdstate', JSON.stringify(newUpdatedState));
   return newUpdatedState;
  case 'BRANCH_UPDATE':
   let branchUpdated = {
     ...state,
     currentUserCompany: getDeepCopy(action.updatedCurrentUserCompany)
   };


   localStorage.setItem('fdstate', JSON.stringify(branchUpdated));
   return branchUpdated;
  
 default:
   return initalState;
 }
};
