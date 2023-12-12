// 'use client'
// import { routeHttp, csrfToken } from '../../../../../../utils/api'
// import { useRouter, useSearchParams, useParams } from 'next/navigation'
// import { useEffect } from 'react';


// const CallbackPage = () => {
//     const router = useRouter();
//     const r = useSearchParams();
//     console.log(r);

//     // useEffect(() => { 
//     //     const fetchUserData = async () => {
//     //         try {
//     //             csrfToken.get('/').then((res: any) => {
//     //                 routeHttp.get('/api/login/google/callback', r).then((res: any) => {
//     //                 })
//     //             })
//     //         } catch (error) {
//     //             console.log(error);
//     //         }
//     //     };
//     //     fetchUserData();
//     // }, []);
//     return (
//         <div>認証中</div>
//     )
// }

// export default CallbackPage;