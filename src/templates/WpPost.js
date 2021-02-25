import React from "react"
import {Container, Heading, Link, Text} from "@chakra-ui/react";
import {graphql, Link as GatsbyLink} from "gatsby";
import { Helmet } from "react-helmet/es/Helmet";

const WpPost = ({ data }) => {
    const { wpPost } = data;
    return(
        <>
            <Helmet>
                <meta name="description" content={wpPost?.seo?.metaDesc} />
            </Helmet>
            <Container maxW="xl" centerContent>
                <Heading as={`h1`} m={4}>
                    {wpPost.title}
                </Heading>
                <Text as={'div'} mt={4} mb={10}>
                    <div dangerouslySetInnerHTML={{ __html: wpPost.content }} />
                </Text>
                <Link as={GatsbyLink} to="/">{`<< Back to Blog`}</Link>
            </Container>
        </>
    )
}

export default WpPost;

export const query = graphql`
query PostById($id: String) {
  wpPost(id: {eq: $id}) {
    title
    content
    seo {
      metaDesc
    }
  }
}
`;
