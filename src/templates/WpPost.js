import React from "react"
import {Container, Heading, Link, Text} from "@chakra-ui/react";
import {Link as GatsbyLink} from "gatsby";

const WpPost = () => {
    return(
        <Container maxW="xl" centerContent>
            <Heading as={`h1`} m={4}>
                Blog Post Title
            </Heading>
            <Text as={'div'} mt={4} mb={10}>
                <div dangerouslySetInnerHTML={{ __html: '<p>This is some content...</p>' }} />
            </Text>
            <Link as={GatsbyLink} to="/">{`<< Back to Blog`}</Link>
        </Container>
    )
}

export default WpPost;
