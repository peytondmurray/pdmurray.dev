import React from 'react'
import styled from '@emotion/styled'

import Sidebar from './Sidebar'
import Header from './Header'

const MainLayout = styled.div``

const ContentLayout = styled.div`
    flex-grow: 1;
`

const PageLayout = styled.div`
    display: flex;
    flex-direction: row;
`

export default function Page(props: any): JSX.Element {
    return (
        <MainLayout>
            <Header />
            <PageLayout>
                <Sidebar />
                <ContentLayout>{props.children}</ContentLayout>
            </PageLayout>
        </MainLayout>
    )
}
