import Head from 'next/head'

import { Box, Link, Flex, SimpleGrid, Image, Stack } from '@chakra-ui/react'

export default function Page() {
  return (
    <Stack
      display={{ base: 'flex', sm: 'flex', lg: 'flex' }}
      position="relative"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
      paddingRight="20px"
      paddingLeft="20px"
      paddingTop="20px"
      paddingBottom="20px"
      width="100%"
      height="inherit"
      overflow="hidden"
      minHeight="100vh"
      spacing="25px"
      background="rgba(255, 255, 255, 1)"
    >
      <Stack
        display={{ base: 'flex', sm: 'flex', lg: 'flex' }}
        position="relative"
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="center"
        spacing="10px"
        isInline
        overflow="hidden"
        maxWidth={940}
        width="100%"
        height="90px"
      >
        <Stack
          display={{ base: 'flex', sm: 'flex', lg: 'flex' }}
          position="relative"
          flexDirection="row"
          alignItems="center"
          justifyContent="flex-start"
          spacing="10px"
          isInline
          flex={1}
          alignSelf="stretch"
        >
          <Link display="block" href="home" _hover={{ opacity: 0.8 }}>
            <Box
              fontSize="22px"
              fontFamily='"Roboto"'
              lineHeight="26px"
              fontWeight={300}
              color="rgba(0, 0, 0, 1)"
              alignItems="center"
              textAlign="center"
              display={{ base: 'initial', sm: 'initial', lg: 'initial' }}
              as="div"
              textDecoration="none"
              _hover={{ textDecoration: 'none' }}
            >
              <Box
                display="inline"
                as="span"
                whiteSpace="pre-wrap"
              >{`MARCUS ISAKSSON`}</Box>
            </Box>
          </Link>
        </Stack>
        <Stack
          display={{ base: 'none', sm: 'flex', lg: 'flex' }}
          position="relative"
          flexDirection="row"
          alignItems="center"
          justifyContent="flex-end"
          paddingLeft="122px"
          paddingTop="23px"
          paddingBottom="23px"
          spacing="37px"
          isInline
          overflow="hidden"
          flex={1}
          alignSelf="stretch"
        >
          <Box
            fontSize="14px"
            fontFamily='"Roboto"'
            lineHeight="16px"
            fontWeight={300}
            color="rgba(0, 0, 0, 1)"
            alignItems="center"
            textAlign="center"
            display={{ base: 'initial', sm: 'initial', lg: 'initial' }}
            as="div"
            textDecoration="none"
            _hover={{ textDecoration: 'none' }}
          >
            <Box
              display="inline"
              as="span"
              whiteSpace="pre-wrap"
            >{`stuff`}</Box>
          </Box>
          <Box
            fontSize="14px"
            fontFamily='"Roboto"'
            lineHeight="16px"
            fontWeight={300}
            color="rgba(0, 0, 0, 1)"
            alignItems="center"
            textAlign="center"
            display={{ base: 'initial', sm: 'initial', lg: 'initial' }}
            as="div"
            textDecoration="none"
            _hover={{ textDecoration: 'none' }}
          >
            <Box display="inline" as="span" whiteSpace="pre-wrap">{`work`}</Box>
          </Box>
          <Link display="block" href="about" _hover={{ opacity: 0.8 }}>
            <Box
              fontSize="14px"
              fontFamily='"Roboto"'
              lineHeight="16px"
              fontWeight={300}
              color="rgba(0, 0, 0, 1)"
              alignItems="center"
              textAlign="center"
              display={{ base: 'initial', sm: 'initial', lg: 'initial' }}
              as="div"
              textDecoration="none"
              _hover={{ textDecoration: 'none' }}
            >
              <Box
                display="inline"
                as="span"
                whiteSpace="pre-wrap"
              >{`about`}</Box>
            </Box>
          </Link>
        </Stack>
        <Stack
          display={{ base: 'flex', sm: 'none', lg: 'none' }}
          position="relative"
          flexDirection="row"
          alignItems="center"
          justifyContent="flex-end"
          paddingRight="20px"
          paddingLeft="122px"
          paddingTop="23px"
          paddingBottom="23px"
          spacing="10px"
          isInline
          overflow="hidden"
          flex={1}
          height="90px"
        >
          <Box
            fontSize="14px"
            fontFamily='"Roboto"'
            lineHeight="16px"
            fontWeight={300}
            color="rgba(0, 0, 0, 1)"
            alignItems="center"
            textAlign="center"
            display={{ base: 'initial', sm: 'initial', lg: 'initial' }}
            as="div"
            textDecoration="none"
            _hover={{ textDecoration: 'none' }}
          >
            <Box display="inline" as="span" whiteSpace="pre-wrap">{`menu`}</Box>
          </Box>
        </Stack>
      </Stack>
      <Box
        display={{ base: 'flex', sm: 'flex', lg: 'flex' }}
        position="relative"
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-end"
        paddingBottom="20px"
        maxWidth={1000}
        width="100%"
        height="150px"
      >
        <Box
          fontSize="48px"
          fontFamily='"Nunito"'
          lineHeight="56px"
          fontWeight={300}
          color="rgba(0, 0, 0, 1)"
          alignItems="flex-start"
          textAlign="center"
          letterSpacing="22px"
          display={{ base: 'initial', sm: 'initial', lg: 'initial' }}
          as="div"
          textDecoration="none"
          _hover={{ textDecoration: 'none' }}
        >
          <Box display="inline" as="span" whiteSpace="pre-wrap">{`LAMPIS`}</Box>
        </Box>
      </Box>
      <Box
        display={{ base: 'flex', sm: 'flex', lg: 'flex' }}
        position="relative"
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-start"
        overflow="hidden"
        maxWidth={800}
        width="100%"
      >
        <Box
          fontSize="13px"
          fontFamily='"Roboto"'
          lineHeight="20px"
          fontWeight={600}
          color="rgba(0, 0, 0, 1)"
          alignItems="flex-start"
          textAlign="start"
          display={{ base: 'initial', sm: 'initial', lg: 'initial' }}
          as="div"
          textDecoration="none"
          _hover={{ textDecoration: 'none' }}
        >
          <Box
            display="inline"
            textDecoration="none"
            _hover={{ textDecoration: 'none' }}
            fontWeight={300}
            as="span"
            whiteSpace="pre-wrap"
          >{`About "`}</Box>
          <Box
            display="inline"
            textDecoration="none"
            _hover={{ textDecoration: 'none' }}
            fontSize="13px"
            lineHeight="13px"
            fontWeight={300}
            as="span"
            whiteSpace="pre-wrap"
          >{`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatu`}</Box>
          <Box
            display="inline"
            textDecoration="none"
            _hover={{ textDecoration: 'none' }}
            fontWeight={300}
            as="span"
            whiteSpace="pre-wrap"
          >{`r? `}</Box>
          <Box display="inline" as="span" whiteSpace="pre-wrap">{``}</Box>
        </Box>
      </Box>
      <Stack
        display={{ base: 'flex', sm: 'flex', lg: 'flex' }}
        position="relative"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
        spacing="20px"
        maxWidth={800}
        flex={1}
        width="100%"
      >
        <Image
          display="block"
          flex={1}
          alignSelf="stretch"
          width="100%"
          height="100%"
          fit="cover"
          alt="render2 1"
          src="https://s3-alpha-sig.figma.com/img/8b3c/a15c/d866327354de58d858f1a83408e3994e?Expires=1642982400&Signature=EVJHE-aXiBnEBE4pTxI8JlXQ~bJy11QD4hS5ju2KKiquBDumHypjVuHJdi89upXko89M-n5rbTlpBcM5b-pjlTocFm3Kx8JIlM3FF1wGeaIgGVQjteG~NnQPdcHzfyWw8IQFke3lhnGLgFdXD9IGJrN6VJ40ojZ9Lbvxof4ZirCTN9CYy20xw4LCyTCabpv89lhx4GEHGZK6j0u~CsfZW0cNG51WojZ2zHfGG7phgzEnLcBnzBvYR2iSUsU4VDnS9vovdfs-4-8huPpvVAW5e4gq399wqS5LzciVgCuniGCSMjM2ej1SCpD-O6ex-~pDSje8ED-WzkSOtxazSnO1gA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        />
        <Image
          display="block"
          flex={1}
          alignSelf="stretch"
          width="100%"
          height="100%"
          fit="cover"
          alt="render2 1"
          src="https://s3-alpha-sig.figma.com/img/120c/70e9/b43bc31e903376a158eb0dba5bb297d1?Expires=1642982400&Signature=AeFvNbAwnLeyh2OqYocZO40~psAvmJ5oEEIiwlP-g24g8Ag2qa0pKhYJxGcwAsUmtg5h-yNBlUkonZb~tlCJPBiZOJgCw0ao2k00M9nO34z6oyXB8MjWF~Vz5Ctb1~~ArNNI8cKchZ4bCwAfrflu7Ld85dbjHYjdZPdoRnpv-8VLTXCGYvoOA2Odv8g4X2bAnKJbo1C9L1fAEBJdGi~i1RWwi7yNDsNRri3LbomMK~dZG4TfMHNLlTtFoz0r54K8Bmjew3ewr9-W1h8H~wwMNCaSrZ-76OtrizjqUkmhcqHzfPsGLf7mTrl8ogQ-RIcVZ00z-0TGIcg9X-Ols3i~vw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        />
      </Stack>
      <Box
        display={{ base: 'flex', sm: 'flex', lg: 'flex' }}
        position="relative"
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-start"
        overflow="hidden"
        maxWidth={800}
        width="100%"
      >
        <Box
          fontSize="13px"
          fontFamily='"Roboto"'
          lineHeight="20px"
          fontWeight={600}
          color="rgba(0, 0, 0, 1)"
          alignItems="flex-start"
          textAlign="start"
          display={{ base: 'initial', sm: 'initial', lg: 'initial' }}
          as="div"
          textDecoration="none"
          _hover={{ textDecoration: 'none' }}
        >
          <Box
            display="inline"
            textDecoration="none"
            _hover={{ textDecoration: 'none' }}
            fontWeight={300}
            as="span"
            whiteSpace="pre-wrap"
          >{`More "`}</Box>
          <Box
            display="inline"
            textDecoration="none"
            _hover={{ textDecoration: 'none' }}
            fontSize="13px"
            lineHeight="13px"
            fontWeight={300}
            as="span"
            whiteSpace="pre-wrap"
          >{`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatu`}</Box>
          <Box
            display="inline"
            textDecoration="none"
            _hover={{ textDecoration: 'none' }}
            fontWeight={300}
            as="span"
            whiteSpace="pre-wrap"
          >{`r? `}</Box>
          <Box display="inline" as="span" whiteSpace="pre-wrap">{``}</Box>
        </Box>
      </Box>
      <Stack
        display={{ base: 'flex', sm: 'flex', lg: 'flex' }}
        position="relative"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
        spacing="20px"
        maxWidth={800}
        flex={1}
        width="100%"
      >
        <Image
          display="block"
          flex={1}
          alignSelf="stretch"
          width="100%"
          height="100%"
          fit="cover"
          alt="render2 1"
          src="https://s3-alpha-sig.figma.com/img/ed2c/98ab/a006e17f9fcd31da7e2c31b076cd3e4a?Expires=1642982400&Signature=KHsRJHYpeTXvVP19pbwlWT02QowiMfxT1e88iR7sSoIE1lSb4d0im5JDCq2hfQmXDrUoWDpSzUEyzQrUtIgkaCiUtXQHOZb~pbnd~-zqYvvzCETGMDHpRQSnHt6-hzaEnvzfY3cbNGVVnjZCmSBuXNrYFDsoB9STJsrC8KzC0u1Wcmbd6e5pbS71PQuJOgTul6I9rnCg2vWK8oYxHtX46U5xbNJFYjYQCFLRIQCB0scmF-YP0~18S9L0dRXIYLouDK1~P0iazXAuoK6fAkOvv~7Clr1mXjqZUpXAx6cadogr4YeXWfKwpilAT9sjleE9DwczM~O5Vbrc83meOIPEaQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        />
        <Image
          display="block"
          flex={1}
          alignSelf="stretch"
          width="100%"
          height="100%"
          fit="cover"
          alt="render2 1"
          src="https://s3-alpha-sig.figma.com/img/1858/6651/e8aaef2d922280d931c1d505429202ff?Expires=1642982400&Signature=gksQxgetE3Fzh57sHZCbo~tFuEDbMkwLosckfZV8Ydm9VDnY6SCU33epAfMHJhI7F7-ZdxoK1LDZO2RzuTLWC4zXku18wm5PDHqNVcpJxSIMIH6id1jjabrdIY977rFPatRIoHZW-rlSZu~s9qfJLk43UOlnqL3vcV9vsRBlGLjDCzhZxt7t3UPTib9E7OV4M7VXL~39Pli8j5Jh20pxOVDBQQcyAS7gGMbajBE-k4HBQex3ZJi~4bYbZZ9f7VnF1bCrcOKV8~LmfHsF28nODhl8ZOA1WoUvM-hX~tUhT6GTNm~WjVRkExwJmacHGo4sLKS0OnDjW14jcyMnbW6fPQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        />
      </Stack>
      <Stack
        display={{ base: 'flex', sm: 'flex', lg: 'flex' }}
        position="relative"
        flexDirection="row"
        alignItems="flex-end"
        justifyContent="center"
        spacing="10px"
        isInline
        overflow="hidden"
        alignSelf="stretch"
        height="146px"
      >
        <Box
          fontSize="9px"
          fontFamily='"Roboto"'
          lineHeight="11px"
          fontWeight={300}
          color="rgba(0, 0, 0, 1)"
          alignItems="flex-start"
          textAlign="start"
          display={{ base: 'initial', sm: 'initial', lg: 'initial' }}
          as="div"
          textDecoration="none"
          _hover={{ textDecoration: 'none' }}
        >
          <Box
            display="inline"
            as="span"
            whiteSpace="pre-wrap"
          >{`© 2021 Marcus Isaksson/ All Rights Reserved`}</Box>
        </Box>
      </Stack>
    </Stack>
  )
}
