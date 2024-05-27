import styled from 'styled-components'

const Root = styled.form`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.layout.spacing.xl2};

    @media (min-width: ${({ theme }) => theme.layout.breakpoint.tablet}) {
        flex-direction: row;
        font-size: ${({ theme }) => theme.typography.heading.size.xl};
        line-height: ${({ theme }) => theme.typography.heading.height.lg};
        max-width: 500px;
    }

    button {
        min-width: 100px;
    }
`

const Notification = styled.div`
    border-radius: 8px;
    background: #000;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 300px;
    padding: 25px;
`

export const Layout = {
    Root,
    Notification,
}
