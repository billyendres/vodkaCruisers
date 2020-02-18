// import React from "react";
// import styled from "styled-components";
// import Layout from "../components/Layout/products/productsThree";
// import FadeIn from "react-fade-in";
// import posed from "react-pose";
// import Fade from "react-reveal/Fade";
// import core from "../components/Layout/products/images/core.png";
// import black from "../components/Layout/products/images/black.png";
// import sugarFree from "../components/Layout/products/images/sugarFree.png";

// const Box = posed.div({
//   hoverable: true,
//   pressable: true,
//   init: {
//     scale: 1,
//   },
//   hover: {
//     scale: 1.1,
//   },
//   press: {
//     scale: 1.2,
//   },
// });

// const Products = () => {
//   return (
//     <Layout>
//       <FadeIn>
//         <Wrap>
//           <ImageWrap>
//             <Box style={{ display: "inline-block" }}>
//               <Fade left>
//                 <Core src={core} alt={core} />
//               </Fade>
//             </Box>
//             <Box style={{ display: "inline-block" }}>
//               <Fade top>
//                 <SugarFree src={sugarFree} alt={sugarFree} />
//               </Fade>
//             </Box>
//             <Box style={{ display: "inline-block" }}>
//               <Fade right>
//                 <Black src={black} alt={black} />
//               </Fade>
//             </Box>
//           </ImageWrap>
//         </Wrap>
//       </FadeIn>
//     </Layout>
//   );
// };

// export default Products;

// const Wrap = styled.div`
//   display: flex;
//   justify-content: center;
//   align-content: center;
//   flex-wrap: wrap;
//   align-items: center;
//   text-align: center;
//   margin-left: 4rem;
//   margin-right: 4rem;
//   @media (max-width: 860px) {
//     margin-left: 2rem;
//     margin-right: 2rem;
//   }
// `;

// const ImageWrap = styled.div`
//   min-height: 80vh;
//   display: flex;
//   align-items: center;
//   flex-wrap: wrap;
//   justify-content: center;
//   margin-top: 5%;
//   margin-left: 4rem;
//   margin-right: 4rem;
//   @media (max-width: 860px) {
//     margin-top: 5rem;
//   }
// `;

// const Core = styled.img`
//   width: 17rem;
//   @media (max-width: 1480px) {
//     width: 20rem;
//   }
//   @media (min-width: 1880px) {
//     width: 25rem;
//   }
// `;

// const SugarFree = styled.img`
//   width: 17rem;
//   margin: 1rem 2rem;
//   @media (max-width: 1480px) {
//     width: 20rem;
//   }
//   @media (min-width: 1880px) {
//     width: 25rem;
//   }
// `;

// const Black = styled.img`
//   width: 17rem;
//   @media (max-width: 1480px) {
//     width: 20rem;
//   }
//   @media (min-width: 1880px) {
//     width: 25rem;
//   }
// `;
