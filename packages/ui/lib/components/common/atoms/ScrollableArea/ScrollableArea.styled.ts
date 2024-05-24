import styled from 'styled-components'

const Root = styled.div`
    overflow: auto;
    width: 100%;
    height: 100%;

    /* Custom scrollbar styles */
    scrollbar-width: thin; /* Firefox */
    scrollbar-color: #888 #f1f1f1; /* Firefox */

    &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    &::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 10px;
        border: 2px solid #f1f1f1;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`

export const Layout = {
    Root,
}
