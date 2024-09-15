import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { CircularProgress, Box } from '@mui/material';

interface AuthInitProps {
  children: React.ReactNode;
}

const AuthInit: React.FC<AuthInitProps> = ({ children }) => {
  const router = useRouter();

//   useEffect(() => {
//     if (userAuth.userId) {
      
//     } else {
//       // Uncomment the following line if you want to redirect to login page
//       // router.push("/page-login");
//     }
//   }, [userAuth.userId, dispatch, router]);

//   if (profileLoading) {
    // return (
    //   <Box
    //     display="flex"
    //     justifyContent="center"
    //     alignItems="center"
    //     minHeight="100vh"
    //   >
    //     <CircularProgress />
    //   </Box>
    // );
//   }

  return <>{children}</>;
};

export default AuthInit;
