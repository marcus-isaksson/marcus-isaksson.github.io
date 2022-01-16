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
      <Stack
        display={{ base: 'flex', sm: 'none', lg: 'none' }}
        position="relative"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        spacing="10px"
        overflow="hidden"
        maxWidth={940}
        width="100%"
      >
        <Stack
          display={{ base: 'flex', sm: 'flex', lg: 'flex' }}
          position="relative"
          flexDirection="row"
          alignItems="flex-start"
          justifyContent="flex-start"
          spacing="10px"
          isInline
          overflow="hidden"
          alignSelf="stretch"
        >
          <Box
            fontSize="14px"
            fontFamily='"Roboto"'
            lineHeight="21px"
            fontWeight={300}
            color="rgba(0, 0, 0, 1)"
            alignItems="flex-start"
            textAlign="start"
            display={{ base: 'initial', sm: 'initial', lg: 'initial' }}
            flex={1}
            as="div"
            textDecoration="none"
            _hover={{ textDecoration: 'none' }}
          >
            <Box
              display="inline"
              as="span"
              whiteSpace="pre-wrap"
            >{`At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.`}</Box>
          </Box>
        </Stack>
        <Box
          display={{ base: 'block', sm: 'block', lg: 'block' }}
          position="relative"
          flexDirection="column"
          background="url(https://s3-alpha-sig.figma.com/img/d8a2/481b/d3552f7f74d5c7b587dc73bcfd6f6d8b?Expires=1642982400&Signature=C6SiVhP4Rypot9VklGxfZoverRMCS0ybz8sw48sLWPd8QaaG7rYkuCsbAzOm9DxVQBjQ-c73yNwnmyvpNoRZbl6QyvySeRaBDVoI5LmNB2Qoa2j3oICBI7FGP6jZbPiEhEC04nm1vf0ioQNXyKuNwhX8xcU6wE18Ocrg5stJvxMak-b0ytp8x5Gs4tC-zPAAwco7LHM0bYjt-EP6z-zKKvtrfOquj9OMja1WLEXBwThBULTPQcb1SwsvzN~35YWGjoaIb-LuxE3-Zizs~hTT8vh0KWeWnuB~vakmx32x0IswMn-8E3FaIvxE7VDJJPmwFbdNGXLddYTkCWadoBwfwQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA) center center/cover"
          overflow="hidden"
          width="250px"
          height="312px"
        />
      </Stack>
      <Stack
        display={{ base: 'none', sm: 'flex', lg: 'flex' }}
        position="relative"
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="flex-start"
        spacing="10px"
        isInline
        overflow="hidden"
        maxWidth={940}
        width="100%"
        height="458px"
      >
        <Box
          display={{ base: 'block', sm: 'block', lg: 'block' }}
          position="relative"
          flexDirection="column"
          background="url(https://s3-alpha-sig.figma.com/img/d8a2/481b/d3552f7f74d5c7b587dc73bcfd6f6d8b?Expires=1642982400&Signature=C6SiVhP4Rypot9VklGxfZoverRMCS0ybz8sw48sLWPd8QaaG7rYkuCsbAzOm9DxVQBjQ-c73yNwnmyvpNoRZbl6QyvySeRaBDVoI5LmNB2Qoa2j3oICBI7FGP6jZbPiEhEC04nm1vf0ioQNXyKuNwhX8xcU6wE18Ocrg5stJvxMak-b0ytp8x5Gs4tC-zPAAwco7LHM0bYjt-EP6z-zKKvtrfOquj9OMja1WLEXBwThBULTPQcb1SwsvzN~35YWGjoaIb-LuxE3-Zizs~hTT8vh0KWeWnuB~vakmx32x0IswMn-8E3FaIvxE7VDJJPmwFbdNGXLddYTkCWadoBwfwQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA) center center/cover"
          overflow="hidden"
          alignSelf="stretch"
          width="366px"
        />
        <Stack
          display={{ base: 'flex', sm: 'flex', lg: 'flex' }}
          position="relative"
          flexDirection="row"
          alignItems="flex-start"
          justifyContent="flex-start"
          spacing="10px"
          isInline
          overflow="hidden"
          flex={1}
          alignSelf="stretch"
        >
          <Box
            fontSize="14px"
            fontFamily='"Roboto"'
            lineHeight="21px"
            fontWeight={300}
            color="rgba(0, 0, 0, 1)"
            alignItems="flex-start"
            textAlign="start"
            display={{ base: 'initial', sm: 'initial', lg: 'initial' }}
            flex={1}
            as="div"
            textDecoration="none"
            _hover={{ textDecoration: 'none' }}
          >
            <Box
              display="inline"
              as="span"
              whiteSpace="pre-wrap"
            >{`At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.`}</Box>
          </Box>
        </Stack>
      </Stack>
      <Stack
        display={{ base: 'flex', sm: 'flex', lg: 'flex' }}
        position="relative"
        flexDirection="row"
        alignItems="center"
        justifyContent="flex-start"
        spacing="10px"
        isInline
        overflow="hidden"
        maxWidth={940}
        width="100%"
      >
        <Box
          fontSize="14px"
          fontFamily='"Roboto"'
          lineHeight="21px"
          fontWeight={600}
          color="rgba(0, 0, 0, 1)"
          alignItems="flex-start"
          textAlign="start"
          letterSpacing="2px"
          display={{ base: 'initial', sm: 'initial', lg: 'initial' }}
          as="div"
          textDecoration="none"
          _hover={{ textDecoration: 'none' }}
        >
          <Box
            display="inline"
            textDecoration="none"
            _hover={{ textDecoration: 'none' }}
            fontWeight={800}
            as="span"
            whiteSpace="pre-wrap"
          >{`EDUCATION
`}</Box>
          <Box
            display="inline"
            textDecoration="none"
            _hover={{ textDecoration: 'none' }}
            fontSize="12px"
            lineHeight="12px"
            fontWeight={300}
            letterSpacing="1px"
            as="span"
            whiteSpace="pre-wrap"
          >{`2021-2022 Product management
2018-2021Mechanical engineer
2017-2018 Product development

`}</Box>
          <Box
            display="inline"
            textDecoration="none"
            _hover={{ textDecoration: 'none' }}
            fontWeight={800}
            as="span"
            whiteSpace="pre-wrap"
          >{`WORK
`}</Box>
          <Box
            display="inline"
            textDecoration="none"
            _hover={{ textDecoration: 'none' }}
            fontSize="12px"
            lineHeight="12px"
            fontWeight={300}
            letterSpacing="1px"
            as="span"
            whiteSpace="pre-wrap"
          >{`2021 UNICO Group, Project Leader
2022 AARKE, Intern, Mechanical Engineer
`}</Box>
          <Box display="inline" as="span" whiteSpace="pre-wrap">{``}</Box>
        </Box>
      </Stack>
      <Stack
        display={{ base: 'flex', sm: 'flex', lg: 'flex' }}
        position="relative"
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="center"
        paddingTop="40px"
        spacing="10px"
        isInline
        overflow="hidden"
        alignSelf="stretch"
        height="96px"
      >
        <Box
          fontSize="14px"
          fontFamily='"Roboto"'
          lineHeight="21px"
          fontWeight={600}
          color="rgba(0, 0, 0, 1)"
          alignItems="flex-start"
          textAlign="center"
          display={{ base: 'initial', sm: 'initial', lg: 'initial' }}
          as="div"
          textDecoration="none"
          _hover={{ textDecoration: 'none' }}
        >
          <Box
            display="inline"
            textDecoration="none"
            _hover={{ textDecoration: 'none' }}
            letterSpacing="3px"
            as="span"
            whiteSpace="pre-wrap"
          >{`CONTACT ME
`}</Box>
          <Box
            display="inline"
            textDecoration="none"
            _hover={{ textDecoration: 'none' }}
            as="span"
            whiteSpace="pre-wrap"
          >{`Email:`}</Box>
          <Box
            display="inline"
            textDecoration="none"
            _hover={{ textDecoration: 'none' }}
            fontWeight={300}
            as="span"
            whiteSpace="pre-wrap"
          >{` macke.isaksson@gmail.com`}</Box>
          <Box display="inline" as="span" whiteSpace="pre-wrap">{``}</Box>
        </Box>
      </Stack>
      <Stack
        display={{ base: 'flex', sm: 'flex', lg: 'flex' }}
        position="relative"
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="center"
        spacing="26px"
        isInline
        overflow="hidden"
        alignSelf="stretch"
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
          height="24px"
          width="24px"
        >
          <Box
            display={{ base: 'block', sm: 'block', lg: 'block' }}
            position="relative"
            flexDirection="column"
            overflow="hidden"
            height="24px"
            width="24px"
          >
            <Box
              display={{ base: 'block', sm: 'block', lg: 'block' }}
              position="absolute"
              flexDirection="column"
              top="1px"
              left="1px"
              width="22px"
              height="22px"
            >
              <Box
                height="22px"
                width="22px"
                overflow="visible"
                position="absolute"
                top={0}
                left={0}
                as="svg"
                style={{ filter: '' }}
              >
                <path
                  d="M2.7206e-07 1.838C2.7206e-07 1.35053 0.193646 0.883032 0.538338 0.53834C0.88303 0.193648 1.35053 2.45031e-06 1.838 2.45031e-06L20.16 2.45031e-06C20.4016 -0.000392101 20.6409 0.0468654 20.8641 0.139069C21.0874 0.231273 21.2903 0.366612 21.4612 0.537339C21.6322 0.708065 21.7677 0.910826 21.8602 1.13401C21.9526 1.3572 22.0001 1.59643 22 1.838L22 20.16C22.0003 20.4016 21.9529 20.6409 21.8606 20.8642C21.7683 21.0875 21.6328 21.2904 21.462 21.4613C21.2912 21.6322 21.0884 21.7678 20.8651 21.8602C20.6419 21.9526 20.4026 22.0001 20.161 22L1.838 22C1.59655 22 1.35746 21.9524 1.1344 21.86C0.911335 21.7676 0.708671 21.6321 0.537984 21.4613C0.367297 21.2905 0.231932 21.0878 0.139623 20.8647C0.0473133 20.6416 -0.000131096 20.4025 2.7206e-07 20.161L2.7206e-07 1.838ZM8.708 8.388L11.687 8.388L11.687 9.884C12.117 9.024 13.217 8.25 14.87 8.25C18.039 8.25 18.79 9.963 18.79 13.106L18.79 18.928L15.583 18.928L15.583 13.822C15.583 12.032 15.153 11.022 14.061 11.022C12.546 11.022 11.916 12.111 11.916 13.822L11.916 18.928L8.708 18.928L8.708 8.388ZM3.208 18.791L6.416 18.791L6.416 8.25L3.208 8.25L3.208 18.79L3.208 18.791ZM6.875 4.812C6.88105 5.08668 6.83217 5.35979 6.73124 5.61532C6.63031 5.87084 6.47935 6.10364 6.28723 6.30003C6.09511 6.49643 5.8657 6.65248 5.61246 6.75901C5.35921 6.86554 5.08724 6.92042 4.8125 6.92042C4.53776 6.92042 4.26579 6.86554 4.01255 6.75901C3.7593 6.65248 3.52989 6.49643 3.33777 6.30003C3.14565 6.10364 2.99469 5.87084 2.89376 5.61532C2.79283 5.35979 2.74395 5.08668 2.75 4.812C2.76187 4.27286 2.98439 3.75979 3.36989 3.38269C3.75539 3.00558 4.27322 2.79442 4.8125 2.79442C5.35178 2.79442 5.86961 3.00558 6.25512 3.38269C6.64062 3.75979 6.86313 4.27286 6.875 4.812L6.875 4.812Z"
                  fill="rgba(0, 0, 0, 1)"
                />
              </Box>
            </Box>
          </Box>
        </Stack>
        <Stack
          display={{ base: 'flex', sm: 'flex', lg: 'flex' }}
          position="relative"
          flexDirection="row"
          alignItems="flex-start"
          justifyContent="flex-start"
          spacing="10px"
          isInline
          overflow="hidden"
          height="24px"
          width="24px"
        >
          <Box
            display={{ base: 'block', sm: 'block', lg: 'block' }}
            position="relative"
            flexDirection="column"
            overflow="hidden"
            height="24px"
            width="24px"
          >
            <Box
              display={{ base: 'block', sm: 'block', lg: 'block' }}
              position="absolute"
              flexDirection="column"
              top="1px"
              left="1px"
              width="22px"
              height="22px"
            >
              <Box
                height="22px"
                width="22px"
                overflow="visible"
                position="absolute"
                top={0}
                left={0}
                as="svg"
                style={{ filter: '' }}
              >
                <path
                  d="M6.465 0.066C7.638 0.012 8.012 0 11 0C13.988 0 14.362 0.013 15.534 0.066C16.706 0.119 17.506 0.306 18.206 0.577C18.939 0.854 19.604 1.287 20.154 1.847C20.714 2.396 21.146 3.06 21.422 3.794C21.694 4.494 21.88 5.294 21.934 6.464C21.988 7.639 22 8.013 22 11C22 13.988 21.987 14.362 21.934 15.535C21.881 16.705 21.694 17.505 21.422 18.205C21.146 18.9391 20.7133 19.6042 20.154 20.154C19.604 20.714 18.939 21.146 18.206 21.422C17.506 21.694 16.706 21.88 15.536 21.934C14.362 21.988 13.988 22 11 22C8.012 22 7.638 21.987 6.465 21.934C5.295 21.881 4.495 21.694 3.795 21.422C3.06092 21.146 2.39582 20.7133 1.846 20.154C1.28638 19.6047 0.853315 18.9399 0.577 18.206C0.306 17.506 0.12 16.706 0.066 15.536C0.012 14.361 0 13.987 0 11C0 8.012 0.013 7.638 0.066 6.466C0.119 5.294 0.306 4.494 0.577 3.794C0.853723 3.06008 1.28712 2.39531 1.847 1.846C2.39604 1.2865 3.06047 0.853443 3.794 0.577C4.494 0.306 5.294 0.12 6.464 0.066L6.465 0.066ZM15.445 2.046C14.285 1.993 13.937 1.982 11 1.982C8.063 1.982 7.715 1.993 6.555 2.046C5.482 2.095 4.9 2.274 4.512 2.425C3.999 2.625 3.632 2.862 3.247 3.247C2.88205 3.60205 2.60118 4.03428 2.425 4.512C2.274 4.9 2.095 5.482 2.046 6.555C1.993 7.715 1.982 8.063 1.982 11C1.982 13.937 1.993 14.285 2.046 15.445C2.095 16.518 2.274 17.1 2.425 17.488C2.601 17.965 2.882 18.398 3.247 18.753C3.602 19.118 4.035 19.399 4.512 19.575C4.9 19.726 5.482 19.905 6.555 19.954C7.715 20.007 8.062 20.018 11 20.018C13.938 20.018 14.285 20.007 15.445 19.954C16.518 19.905 17.1 19.726 17.488 19.575C18.001 19.375 18.368 19.138 18.753 18.753C19.118 18.398 19.399 17.965 19.575 17.488C19.726 17.1 19.905 16.518 19.954 15.445C20.007 14.285 20.018 13.937 20.018 11C20.018 8.063 20.007 7.715 19.954 6.555C19.905 5.482 19.726 4.9 19.575 4.512C19.375 3.999 19.138 3.632 18.753 3.247C18.3979 2.88207 17.9657 2.60121 17.488 2.425C17.1 2.274 16.518 2.095 15.445 2.046L15.445 2.046ZM9.595 14.391C10.3797 14.7176 11.2534 14.7617 12.0669 14.5157C12.8805 14.2697 13.5834 13.7489 14.0556 13.0422C14.5278 12.3356 14.7401 11.4869 14.656 10.6411C14.572 9.79534 14.197 9.00497 13.595 8.405C13.2112 8.02148 12.7472 7.72781 12.2363 7.54515C11.7255 7.36248 11.1804 7.29536 10.6405 7.34862C10.1006 7.40187 9.57915 7.57418 9.1138 7.85313C8.64845 8.13208 8.25074 8.51074 7.9493 8.96185C7.64786 9.41296 7.45019 9.92529 7.37052 10.462C7.29084 10.9986 7.33115 11.5463 7.48854 12.0655C7.64593 12.5847 7.91648 13.0626 8.28072 13.4647C8.64496 13.8668 9.09382 14.1832 9.595 14.391ZM7.002 7.002C7.52702 6.47697 8.15032 6.0605 8.8363 5.77636C9.52228 5.49222 10.2575 5.34597 11 5.34597C11.7425 5.34597 12.4777 5.49222 13.1637 5.77636C13.8497 6.0605 14.473 6.47697 14.998 7.002C15.523 7.52702 15.9395 8.15032 16.2236 8.8363C16.5078 9.52228 16.654 10.2575 16.654 11C16.654 11.7425 16.5078 12.4777 16.2236 13.1637C15.9395 13.8497 15.523 14.473 14.998 14.998C13.9377 16.0583 12.4995 16.654 11 16.654C9.50046 16.654 8.06234 16.0583 7.002 14.998C5.94166 13.9377 5.34597 12.4995 5.34597 11C5.34597 9.50046 5.94166 8.06234 7.002 7.002L7.002 7.002ZM17.908 6.188C18.0381 6.06527 18.1423 5.91768 18.2143 5.75397C18.2863 5.59027 18.3248 5.41377 18.3274 5.23493C18.33 5.05609 18.2967 4.87855 18.2295 4.71281C18.1622 4.54707 18.0624 4.39651 17.936 4.27004C17.8095 4.14357 17.6589 4.04376 17.4932 3.97652C17.3275 3.90928 17.1499 3.87598 16.9711 3.87858C16.7922 3.88119 16.6157 3.91965 16.452 3.9917C16.2883 4.06374 16.1407 4.1679 16.018 4.298C15.7793 4.55103 15.6486 4.88712 15.6537 5.23493C15.6588 5.58274 15.7992 5.91488 16.0452 6.16084C16.2911 6.40681 16.6233 6.54723 16.9711 6.5523C17.3189 6.55737 17.655 6.42669 17.908 6.188L17.908 6.188Z"
                  fill="rgba(0, 0, 0, 1)"
                />
              </Box>
            </Box>
          </Box>
        </Stack>
        <Stack
          display={{ base: 'flex', sm: 'flex', lg: 'flex' }}
          position="relative"
          flexDirection="row"
          alignItems="flex-start"
          justifyContent="flex-start"
          spacing="10px"
          isInline
          overflow="hidden"
          height="24px"
          width="24px"
        >
          <Box
            display={{ base: 'block', sm: 'block', lg: 'block' }}
            position="relative"
            flexDirection="column"
            overflow="hidden"
            height="24px"
            width="24px"
          >
            <Box
              display={{ base: 'block', sm: 'block', lg: 'block' }}
              position="absolute"
              flexDirection="column"
              top={0}
              left={0}
              width="24px"
              height="23px"
            >
              <Box
                height="23px"
                width="24px"
                overflow="visible"
                position="absolute"
                top={0}
                left={0}
                as="svg"
                style={{ filter: '' }}
              >
                <path
                  d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z"
                  fill="rgba(0, 0, 0, 1)"
                />
              </Box>
            </Box>
          </Box>
        </Stack>
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
