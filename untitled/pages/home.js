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
      overflow="initial"
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
      <SimpleGrid
        display={{ base: 'none', sm: 'none', lg: 'grid' }}
        position="relative"
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="center"
        spacing="20px"
        isInline
        columns={{ lg: '3' }}
        maxWidth={940}
        grid={{ lg: '3' }}
        width="100%"
      >
        <Link
          height="300px"
          width="300px"
          display="block"
          href="project"
          _hover={{ opacity: 0.8 }}
        >
          <Box
            display={{ base: 'block', sm: 'block', lg: 'block' }}
            position="relative"
            flexDirection="column"
            background="url(https://s3-alpha-sig.figma.com/img/6f3d/280a/adcd1cac1cc7266edd0151149f906260?Expires=1642982400&Signature=hFzxpYXgS1p2JgoKNNZ5GNNCBzOrUdDCYzY5beM5unFyX60u0ZbWfR6-f3W9BpcJe4f4mxWwfD6IyqQRaM6U9Sdo2Q05rXyN~tdDiU2V1Bg5clNqVyMvqMdjUqUxfJo0E~vFWm9G3ypcq55GLw~cncCDIY5Uv4MXyd5iQRN-ES4rtm4~App73IP0YH7Oq29o8TR15bdV5DeKgMh9kJ-jofGTmVXkMwoBbFWr7GLKTqFJFmzAhv3q01LAEmGKdsIoQyLRq3BgiPy0AnYMpiC31HBXHYhZVeiyEwDTn5KIRRVfP9S85jEtD2OvW3NrJBBCYqSGS-VfluVAaerkgxxlBw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA) center center/cover"
            overflow="hidden"
            height="300px"
            width="300px"
          />
        </Link>
        <Box
          display={{ base: 'block', sm: 'block', lg: 'block' }}
          position="relative"
          flexDirection="column"
          background="url(https://s3-alpha-sig.figma.com/img/0610/1199/d4a91bbc425f7861b3bc14511b9fbce2?Expires=1642982400&Signature=HKdcjo4eYP2UIGlj3H41uqr3lW6s1Ur~YNIRiBVTQ1Wb3R0rEsBKr5cJZKWU2AAieZy9sbhdTOK1GZUKJoN1kSdc4L3XPmMmCUR9FWgr0Hz~yrMdACl8gqE4TBAsUoV-skCcQz4s6LUfaB2aVGwVz8oWyCkJLvDxJqSolp4nsrmNx6xxqlbCmZ8J3Pk-6Xad~Am0RyJsTOSTA2LMRelVdYN~5gUeGrDp4kZQvg6U06Sb9r7FsgmWu9OV5e9sc2Luwuiesnfq3m-CDwojq0fgdtqVok2I7pL4kTy815ku~-Sy6U6iHNa16DdQcOBhIEWXpZTBnDV5FyDVM6PnAuMBlg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA) center center/cover"
          overflow="hidden"
          height="300px"
          width="300px"
        />
        <Box
          display={{ base: 'block', sm: 'block', lg: 'block' }}
          position="relative"
          flexDirection="column"
          background="url(https://s3-alpha-sig.figma.com/img/98a0/f2d9/a2af857645c8f20ebbdc860d3f21990e?Expires=1642982400&Signature=VbaXsFVPry40KY0YjywALRS0Aq8dHJ3ps8HY~ZsCAMaDcwKPLDZ7jj5W6bfWoRUodzEHh69HkyGIvv4HrlWeM3hMvYJz~2yytBJsSJroy8lqpR1VrfOkb7kpzI3HRSst3ILaOmmEQv9kpTR1czXMs8nGN2XSfPOJmRdjQnTmrBU2QKAA0go~C4eSTGj6E-TaYaLcLgF0zhSYyIRVt8g~~3FpLdlPoyMeIv9bhgtZonFqyQW8ZoHO-JvshYkBF~hsq6ZuWlHDuB60iie0qxq1THRRK1dCmLSaQN84S9LXY-AYBlrkkPSeHO86d8pNYpgmMweIpFwV2fzxsOWrkJEcjg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA) center center/cover"
          overflow="hidden"
          height="300px"
          width="300px"
        />
        <Box
          display={{ base: 'block', sm: 'block', lg: 'block' }}
          position="relative"
          flexDirection="column"
          background="url(https://s3-alpha-sig.figma.com/img/9661/7583/a2d1ed094655763cf620bc848d204a7e?Expires=1642982400&Signature=EqTjo-UpaWLSau9t1RAjWMeXimduToh7G6JwjIHdbSTTPNkz1xFli3a8MAA6GMB1Dgr9o7iNu~3~NRvc0CojaD~ltE88jnOVtFycToZLVYq5q8MZk1Q1WWXWv0tJFJ7ZvMik7KzwuPZl41PplGkRi3jkEoGAiEenwlmaTkh5vAtyPUzs76JzQ4-6Cm4GjzMhw2U0g9siv40ElrDgfvHg94fTMZSa65xX8wAD5Tzitd9a2sYhen2BCodDtokChawHc-FJzVAGeWvTYPGj-5m2wolx40b3l5UnlEpnU2g4fVpT1fcF9T3TcBPwP08Q6EC0geoS135y3OLWVBUQDhkoww__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA) center center/cover"
          overflow="hidden"
          height="300px"
          width="300px"
        />
        <Box
          display={{ base: 'block', sm: 'block', lg: 'block' }}
          position="relative"
          flexDirection="column"
          background="url(https://s3-alpha-sig.figma.com/img/e923/4269/2683e0fdd55329605bc67730f2ac9b79?Expires=1642982400&Signature=SR-aQhGPJcu9G~R5chVOEmDRIQNIgi75ctUjPjk7ipf5k7d7lLLSJTI58bEZSXLPGRV1tFxFxYxRF8f53Z4UAMwuGQkWsQImvwFGUuS~PvQtNNKNcS~SqveefODvQ1Iyq~CRIHqgkTXT0aK4t81UbjAbY2efE9QmQyaSgn9CQ~nqnAK~i~3e5LhN2VqpQWSBbmVAHSmGplBZJLXnlgQbQ-0Dchue6QY1mBjgayEVg6OUP~O9EruI9DE~ap5WkyBHbEouUlifIAwCgfqYAGC9j6M5QCR-dJWdiETWlJ4VJ6uHZzsic14Uvm01LNlPWZB3CKAMDoo77NgkPVovyek00Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA) center center/cover"
          overflow="hidden"
          height="300px"
          width="300px"
        />
        <Box
          display={{ base: 'block', sm: 'block', lg: 'block' }}
          position="relative"
          flexDirection="column"
          background="url(https://s3-alpha-sig.figma.com/img/7d8c/beee/9f5c8e871cfee2c8d8fc8ca5006720ea?Expires=1642982400&Signature=Z1uwcyqonsKicDdeGVL1wTtg6Nudc7zQz9a8pSlXajVqKvn9iMlok7OBFrKzkt9qjoisthPZwjNIRfGS-aatiA46kLtzfGGyJmTUl4m6b80dlz1QIoqDzx4UgSYIFV4XOjK1EH00otkAlt4NYbB-QHWDlHS9p5BwMGQqk0RT1TN3KKR8LwzC6SPZ~aODnOlYd-5OD2HGZ5nTRgNX36k8JrZI3OqF363tAIIVwJ9OEb6K4Dh~YDZGo-X1PSUcZFzMv9uXYlSLrDw-6TGx5RxIXqIVllE6BlrSpTkAN6k6eFqT8tzFYS4aP0gT49-Ymq61qIMYzcifR43MB4Ki6dBydw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA) center center/cover"
          overflow="hidden"
          height="300px"
          width="300px"
        />
      </SimpleGrid>
      <SimpleGrid
        display={{ base: 'none', sm: 'grid', lg: 'none' }}
        position="relative"
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="center"
        spacing="20px"
        isInline
        columns={{ sm: '2' }}
        maxWidth={620}
        grid={{ sm: '2' }}
        width="100%"
      >
        <Link
          height="300px"
          width="300px"
          display="block"
          href="project"
          _hover={{ opacity: 0.8 }}
        >
          <Box
            display={{ base: 'block', sm: 'block', lg: 'block' }}
            position="relative"
            flexDirection="column"
            background="url(https://s3-alpha-sig.figma.com/img/6f3d/280a/adcd1cac1cc7266edd0151149f906260?Expires=1642982400&Signature=hFzxpYXgS1p2JgoKNNZ5GNNCBzOrUdDCYzY5beM5unFyX60u0ZbWfR6-f3W9BpcJe4f4mxWwfD6IyqQRaM6U9Sdo2Q05rXyN~tdDiU2V1Bg5clNqVyMvqMdjUqUxfJo0E~vFWm9G3ypcq55GLw~cncCDIY5Uv4MXyd5iQRN-ES4rtm4~App73IP0YH7Oq29o8TR15bdV5DeKgMh9kJ-jofGTmVXkMwoBbFWr7GLKTqFJFmzAhv3q01LAEmGKdsIoQyLRq3BgiPy0AnYMpiC31HBXHYhZVeiyEwDTn5KIRRVfP9S85jEtD2OvW3NrJBBCYqSGS-VfluVAaerkgxxlBw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA) center center/cover"
            overflow="hidden"
            height="300px"
            width="300px"
          />
        </Link>
        <Box
          display={{ base: 'block', sm: 'block', lg: 'block' }}
          position="relative"
          flexDirection="column"
          background="url(https://s3-alpha-sig.figma.com/img/0610/1199/d4a91bbc425f7861b3bc14511b9fbce2?Expires=1642982400&Signature=HKdcjo4eYP2UIGlj3H41uqr3lW6s1Ur~YNIRiBVTQ1Wb3R0rEsBKr5cJZKWU2AAieZy9sbhdTOK1GZUKJoN1kSdc4L3XPmMmCUR9FWgr0Hz~yrMdACl8gqE4TBAsUoV-skCcQz4s6LUfaB2aVGwVz8oWyCkJLvDxJqSolp4nsrmNx6xxqlbCmZ8J3Pk-6Xad~Am0RyJsTOSTA2LMRelVdYN~5gUeGrDp4kZQvg6U06Sb9r7FsgmWu9OV5e9sc2Luwuiesnfq3m-CDwojq0fgdtqVok2I7pL4kTy815ku~-Sy6U6iHNa16DdQcOBhIEWXpZTBnDV5FyDVM6PnAuMBlg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA) center center/cover"
          overflow="hidden"
          height="300px"
          width="300px"
        />
        <Box
          display={{ base: 'block', sm: 'block', lg: 'block' }}
          position="relative"
          flexDirection="column"
          background="url(https://s3-alpha-sig.figma.com/img/98a0/f2d9/a2af857645c8f20ebbdc860d3f21990e?Expires=1642982400&Signature=VbaXsFVPry40KY0YjywALRS0Aq8dHJ3ps8HY~ZsCAMaDcwKPLDZ7jj5W6bfWoRUodzEHh69HkyGIvv4HrlWeM3hMvYJz~2yytBJsSJroy8lqpR1VrfOkb7kpzI3HRSst3ILaOmmEQv9kpTR1czXMs8nGN2XSfPOJmRdjQnTmrBU2QKAA0go~C4eSTGj6E-TaYaLcLgF0zhSYyIRVt8g~~3FpLdlPoyMeIv9bhgtZonFqyQW8ZoHO-JvshYkBF~hsq6ZuWlHDuB60iie0qxq1THRRK1dCmLSaQN84S9LXY-AYBlrkkPSeHO86d8pNYpgmMweIpFwV2fzxsOWrkJEcjg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA) center center/cover"
          overflow="hidden"
          height="300px"
          width="300px"
        />
        <Box
          display={{ base: 'block', sm: 'block', lg: 'block' }}
          position="relative"
          flexDirection="column"
          background="url(https://s3-alpha-sig.figma.com/img/9661/7583/a2d1ed094655763cf620bc848d204a7e?Expires=1642982400&Signature=EqTjo-UpaWLSau9t1RAjWMeXimduToh7G6JwjIHdbSTTPNkz1xFli3a8MAA6GMB1Dgr9o7iNu~3~NRvc0CojaD~ltE88jnOVtFycToZLVYq5q8MZk1Q1WWXWv0tJFJ7ZvMik7KzwuPZl41PplGkRi3jkEoGAiEenwlmaTkh5vAtyPUzs76JzQ4-6Cm4GjzMhw2U0g9siv40ElrDgfvHg94fTMZSa65xX8wAD5Tzitd9a2sYhen2BCodDtokChawHc-FJzVAGeWvTYPGj-5m2wolx40b3l5UnlEpnU2g4fVpT1fcF9T3TcBPwP08Q6EC0geoS135y3OLWVBUQDhkoww__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA) center center/cover"
          overflow="hidden"
          height="300px"
          width="300px"
        />
        <Box
          display={{ base: 'block', sm: 'block', lg: 'block' }}
          position="relative"
          flexDirection="column"
          background="url(https://s3-alpha-sig.figma.com/img/e923/4269/2683e0fdd55329605bc67730f2ac9b79?Expires=1642982400&Signature=SR-aQhGPJcu9G~R5chVOEmDRIQNIgi75ctUjPjk7ipf5k7d7lLLSJTI58bEZSXLPGRV1tFxFxYxRF8f53Z4UAMwuGQkWsQImvwFGUuS~PvQtNNKNcS~SqveefODvQ1Iyq~CRIHqgkTXT0aK4t81UbjAbY2efE9QmQyaSgn9CQ~nqnAK~i~3e5LhN2VqpQWSBbmVAHSmGplBZJLXnlgQbQ-0Dchue6QY1mBjgayEVg6OUP~O9EruI9DE~ap5WkyBHbEouUlifIAwCgfqYAGC9j6M5QCR-dJWdiETWlJ4VJ6uHZzsic14Uvm01LNlPWZB3CKAMDoo77NgkPVovyek00Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA) center center/cover"
          overflow="hidden"
          height="300px"
          width="300px"
        />
        <Box
          display={{ base: 'block', sm: 'block', lg: 'block' }}
          position="relative"
          flexDirection="column"
          background="url(https://s3-alpha-sig.figma.com/img/7d8c/beee/9f5c8e871cfee2c8d8fc8ca5006720ea?Expires=1642982400&Signature=Z1uwcyqonsKicDdeGVL1wTtg6Nudc7zQz9a8pSlXajVqKvn9iMlok7OBFrKzkt9qjoisthPZwjNIRfGS-aatiA46kLtzfGGyJmTUl4m6b80dlz1QIoqDzx4UgSYIFV4XOjK1EH00otkAlt4NYbB-QHWDlHS9p5BwMGQqk0RT1TN3KKR8LwzC6SPZ~aODnOlYd-5OD2HGZ5nTRgNX36k8JrZI3OqF363tAIIVwJ9OEb6K4Dh~YDZGo-X1PSUcZFzMv9uXYlSLrDw-6TGx5RxIXqIVllE6BlrSpTkAN6k6eFqT8tzFYS4aP0gT49-Ymq61qIMYzcifR43MB4Ki6dBydw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA) center center/cover"
          overflow="hidden"
          height="300px"
          width="300px"
        />
      </SimpleGrid>
      <SimpleGrid
        display={{ base: 'grid', sm: 'none', lg: 'none' }}
        position="relative"
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="center"
        spacing="20px"
        isInline
        columns={{ base: '2' }}
        maxWidth={340}
        grid={{ base: '2' }}
        width="100%"
      >
        <Link
          height="160px"
          width="160px"
          display="block"
          href="project"
          _hover={{ opacity: 0.8 }}
        >
          <Box
            display={{ base: 'block', sm: 'block', lg: 'block' }}
            position="relative"
            flexDirection="column"
            background="url(https://s3-alpha-sig.figma.com/img/6f3d/280a/adcd1cac1cc7266edd0151149f906260?Expires=1642982400&Signature=hFzxpYXgS1p2JgoKNNZ5GNNCBzOrUdDCYzY5beM5unFyX60u0ZbWfR6-f3W9BpcJe4f4mxWwfD6IyqQRaM6U9Sdo2Q05rXyN~tdDiU2V1Bg5clNqVyMvqMdjUqUxfJo0E~vFWm9G3ypcq55GLw~cncCDIY5Uv4MXyd5iQRN-ES4rtm4~App73IP0YH7Oq29o8TR15bdV5DeKgMh9kJ-jofGTmVXkMwoBbFWr7GLKTqFJFmzAhv3q01LAEmGKdsIoQyLRq3BgiPy0AnYMpiC31HBXHYhZVeiyEwDTn5KIRRVfP9S85jEtD2OvW3NrJBBCYqSGS-VfluVAaerkgxxlBw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA) center center/cover"
            overflow="hidden"
            height="160px"
            width="160px"
          />
        </Link>
        <Box
          display={{ base: 'block', sm: 'block', lg: 'block' }}
          position="relative"
          flexDirection="column"
          background="url(https://s3-alpha-sig.figma.com/img/0610/1199/d4a91bbc425f7861b3bc14511b9fbce2?Expires=1642982400&Signature=HKdcjo4eYP2UIGlj3H41uqr3lW6s1Ur~YNIRiBVTQ1Wb3R0rEsBKr5cJZKWU2AAieZy9sbhdTOK1GZUKJoN1kSdc4L3XPmMmCUR9FWgr0Hz~yrMdACl8gqE4TBAsUoV-skCcQz4s6LUfaB2aVGwVz8oWyCkJLvDxJqSolp4nsrmNx6xxqlbCmZ8J3Pk-6Xad~Am0RyJsTOSTA2LMRelVdYN~5gUeGrDp4kZQvg6U06Sb9r7FsgmWu9OV5e9sc2Luwuiesnfq3m-CDwojq0fgdtqVok2I7pL4kTy815ku~-Sy6U6iHNa16DdQcOBhIEWXpZTBnDV5FyDVM6PnAuMBlg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA) center center/cover"
          overflow="hidden"
          height="160px"
          width="160px"
        />
        <Box
          display={{ base: 'block', sm: 'block', lg: 'block' }}
          position="relative"
          flexDirection="column"
          background="url(https://s3-alpha-sig.figma.com/img/98a0/f2d9/a2af857645c8f20ebbdc860d3f21990e?Expires=1642982400&Signature=VbaXsFVPry40KY0YjywALRS0Aq8dHJ3ps8HY~ZsCAMaDcwKPLDZ7jj5W6bfWoRUodzEHh69HkyGIvv4HrlWeM3hMvYJz~2yytBJsSJroy8lqpR1VrfOkb7kpzI3HRSst3ILaOmmEQv9kpTR1czXMs8nGN2XSfPOJmRdjQnTmrBU2QKAA0go~C4eSTGj6E-TaYaLcLgF0zhSYyIRVt8g~~3FpLdlPoyMeIv9bhgtZonFqyQW8ZoHO-JvshYkBF~hsq6ZuWlHDuB60iie0qxq1THRRK1dCmLSaQN84S9LXY-AYBlrkkPSeHO86d8pNYpgmMweIpFwV2fzxsOWrkJEcjg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA) center center/cover"
          overflow="hidden"
          height="160px"
          width="160px"
        />
        <Box
          display={{ base: 'block', sm: 'block', lg: 'block' }}
          position="relative"
          flexDirection="column"
          background="url(https://s3-alpha-sig.figma.com/img/9661/7583/a2d1ed094655763cf620bc848d204a7e?Expires=1642982400&Signature=EqTjo-UpaWLSau9t1RAjWMeXimduToh7G6JwjIHdbSTTPNkz1xFli3a8MAA6GMB1Dgr9o7iNu~3~NRvc0CojaD~ltE88jnOVtFycToZLVYq5q8MZk1Q1WWXWv0tJFJ7ZvMik7KzwuPZl41PplGkRi3jkEoGAiEenwlmaTkh5vAtyPUzs76JzQ4-6Cm4GjzMhw2U0g9siv40ElrDgfvHg94fTMZSa65xX8wAD5Tzitd9a2sYhen2BCodDtokChawHc-FJzVAGeWvTYPGj-5m2wolx40b3l5UnlEpnU2g4fVpT1fcF9T3TcBPwP08Q6EC0geoS135y3OLWVBUQDhkoww__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA) center center/cover"
          overflow="hidden"
          height="160px"
          width="160px"
        />
        <Box
          display={{ base: 'block', sm: 'block', lg: 'block' }}
          position="relative"
          flexDirection="column"
          background="url(https://s3-alpha-sig.figma.com/img/e923/4269/2683e0fdd55329605bc67730f2ac9b79?Expires=1642982400&Signature=SR-aQhGPJcu9G~R5chVOEmDRIQNIgi75ctUjPjk7ipf5k7d7lLLSJTI58bEZSXLPGRV1tFxFxYxRF8f53Z4UAMwuGQkWsQImvwFGUuS~PvQtNNKNcS~SqveefODvQ1Iyq~CRIHqgkTXT0aK4t81UbjAbY2efE9QmQyaSgn9CQ~nqnAK~i~3e5LhN2VqpQWSBbmVAHSmGplBZJLXnlgQbQ-0Dchue6QY1mBjgayEVg6OUP~O9EruI9DE~ap5WkyBHbEouUlifIAwCgfqYAGC9j6M5QCR-dJWdiETWlJ4VJ6uHZzsic14Uvm01LNlPWZB3CKAMDoo77NgkPVovyek00Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA) center center/cover"
          overflow="hidden"
          height="160px"
          width="160px"
        />
        <Box
          display={{ base: 'block', sm: 'block', lg: 'block' }}
          position="relative"
          flexDirection="column"
          background="url(https://s3-alpha-sig.figma.com/img/7d8c/beee/9f5c8e871cfee2c8d8fc8ca5006720ea?Expires=1642982400&Signature=Z1uwcyqonsKicDdeGVL1wTtg6Nudc7zQz9a8pSlXajVqKvn9iMlok7OBFrKzkt9qjoisthPZwjNIRfGS-aatiA46kLtzfGGyJmTUl4m6b80dlz1QIoqDzx4UgSYIFV4XOjK1EH00otkAlt4NYbB-QHWDlHS9p5BwMGQqk0RT1TN3KKR8LwzC6SPZ~aODnOlYd-5OD2HGZ5nTRgNX36k8JrZI3OqF363tAIIVwJ9OEb6K4Dh~YDZGo-X1PSUcZFzMv9uXYlSLrDw-6TGx5RxIXqIVllE6BlrSpTkAN6k6eFqT8tzFYS4aP0gT49-Ymq61qIMYzcifR43MB4Ki6dBydw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA) center center/cover"
          overflow="hidden"
          height="160px"
          width="160px"
        />
      </SimpleGrid>
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
