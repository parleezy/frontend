// Styling
import { Layout } from './PrelaunchContainer.styled'

// Components
import { PrelaunchContent, PrelaunchImage } from './components'

export function PrelaunchContainer() {
    // return (
    //     <Layout.Root>
    //         <Layout.Icon>
    //             <img alt="logo" src="/images/logo-transparent-color.svg" />
    //         </Layout.Icon>
    //         <Layout.Inner>
    //             <Layout.Container>
    //                 <PrelaunchHeader />
    //             </Layout.Container>
    //             <Layout.Container>
    //                 <img alt="logo" src="/images/logo-transparent-color.svg" />
    //             </Layout.Container>
    //         </Layout.Inner>
    //     </Layout.Root>
    // )

    return (
        <Layout.Root>
            <Layout.Inner>
                <PrelaunchContent />
                <PrelaunchImage />
            </Layout.Inner>
        </Layout.Root>
    )
}
