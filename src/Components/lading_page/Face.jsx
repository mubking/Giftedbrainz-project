// // pages/index.js
// "use client"
// import { useState } from 'react';
// import axios from 'axios';

// const Face = () => {
//   const [response, setResponse] = useState(null);

//   const handleFaceRecognition = async () => {
//     const apiKey = "HSCFsfSR5YiN276-tLpai-HbmvgPAJWp";
//     const apiSecret = "5WBPEBjDzeG3A2rIzgqtWu55KzT-p2ii";
//     const imageUrl = '/about.png'; // Replace with the actual URL of your image

//     const apiUrl = 'https://api-us.faceplusplus.com/facepp/v3/face/analyze'; // Adjust the endpoint based on your needs

//     const params = new URLSearchParams({
//       image_url: imageUrl,
//       // Add more parameters based on the Face++ API documentation
//     });

//     try {
//       const { data } = await axios.post(apiUrl, params, {
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//           Authorization: `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString('base64')}`,
//         },
//       });

//       setResponse(data);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-8 h-screen">
//       <h1 className="bg-blue-500 text-white p-4 font-bold text-2xl">
//         Face Recognition Website
//       </h1>

//       <button
//         onClick={handleFaceRecognition}
//         className="mt-4 bg-green-500 text-white p-2 rounded"
//       >
//         Perform Face Recognition
//       </button>

//       {response && (
//         <div className="mt-4 p-4 border-2 border-gray-300">
//           <pre>{JSON.stringify(response, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Face;
