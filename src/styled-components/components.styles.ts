import styled from 'styled-components';
import tw from 'twin.macro';

interface SearchFormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  ${tw`sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
  text-gray-600 max-w-screen-sm my-4 leading-loose`}
`;

export const SearchForm = styled.form<SearchFormProps>`
  ${tw`my-10 max-w-screen-sm flex`}
  input {
    ${tw`bg-white focus:outline-none border border-gray-300
    rounded-lg px-4 block w-full appearance-none
    leading-normal mr-4 h-16 placeholder-gray-400
    text-gray-500`}
    ${props =>
      props.hasError
        ? tw`border-red-600 focus:shadow-none`
        : tw`focus:shadow-outline`}
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
      ${tw`mx-5 flex`}

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

export const Error = styled.div`
  ${tw`text-red-600 bg-red-100 border border-red-400
  text-red-700 px-4 py-3 rounded max-w-screen-sm my-6`}
`;
