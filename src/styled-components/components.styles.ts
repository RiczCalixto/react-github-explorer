import styled from 'styled-components';
import tw from 'twin.macro';

export const Title = styled.h1`
  ${tw`sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
  text-gray-600 max-w-screen-sm my-4 leading-loose`}
`;

export const SearchForm = styled.form`
  ${tw`my-10 max-w-screen-sm flex`}
  input {
    ${tw`bg-white focus:outline-none focus:shadow-outline
    border border-gray-300 rounded-lg px-4 block w-full
    appearance-none leading-normal mr-4 h-16 placeholder-gray-400
    text-gray-500`}
  }
  button {
    ${tw`bg-transparent hover:bg-blue-500 text-blue-700
    font-semibold hover:text-white py-2 px-4 border border-blue-500
    hover:border-transparent rounded w-48 h-16 duration-500`}
  }
`;

export const RepositoriesList = styled.div`
  a {
    ${tw`bg-white rounded-md w-full p-6 block flex items-center
    transform hover:translate-x-4 duration-500`}

    img {
      ${tw`w-16 h-16 rounded-full`}
    }

    & + a {
      ${tw`mt-4`}
    }

    div {
      ${tw`mx-5`}

      strong {
        ${tw`text-gray-600 text-lg`}
      }

      p {
        ${tw`text-gray-500 text-base `}
      }
    }

    svg {
      ${tw`ml-auto text-gray-600`}
    }
  }
`;
