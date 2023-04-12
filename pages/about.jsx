import {
    Avatar,
    Box,
    chakra,
    Container,
    Flex,
    Icon,
    SimpleGrid,
    useColorModeValue,
  } from '@chakra-ui/react';
import TestimonialCard from '../components/TestimonialCard';
  
  const testimonials = [
    {
      name: 'Dicoding Academy (Fasilitasi IdCamp dan Kemenparkraf)',
      role: 'Front End Learner',
      content:
        'Ketika pandemi muncul di Indonesia membuat semua kehidupan dirumahkan, sehingga saya memutuskan untuk mencari pengetahuan yang lebih banyak tentang pengembangan website disamping untuk kebutuhan pengembangan media skripsi, akan tetapi untuk bekal masa depan juga',
      avatar:
        'https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/0ecccc80caed7d3013433880e099e4fb.png',
  },
    {
      name: 'Code First',
      role: 'Web and Code Instructor',
      content:
        'Setelah mendapatkan pengetahuan dari pelatihan sebelumnya, saya beranikan diri untuk menjadi sebagai instruktur Coding di Startup lokal di Cirebon',
      avatar:
        'data:image/png;base64,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',
  },
    {
      name: 'SMP Islam Qurani Al Bahjah',
      role: 'Informatics Teacher and IT Staff',
      content:
        'Setelah dinyatakan lulus dan menyandang gelar Sarjana Pendidikan petualangan berikutnya adalah menjadi seorang guru profesional dengan tetap mengembangkan dan mempraktikan secara langsung pengetahuan yang dimiliki pada pengembangan dan pembuatan sistem yang menunjang digitalisasi pendidikan',
      avatar:
        'data:image/jpeg;base64,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',
  },
    {
      name: 'Bitzania Surabaya',
      role: 'Frontend Developer',
      content:
        'Disela-sela waktu mengajar untuk memanfaatkan waktu luang, saya memberanikan diri untuk terjun langsung pada projek industri dengan menjadi frontend developer di Bitzania Surabaya dengan jangka projek 6 bulan untuk mengembangkan sistem pergudangan',
      avatar:
        'https://i.pinimg.com/280x280_RS/33/c5/e1/33c5e1069bef47a25c4bd458156cef09.jpg',
  },
]
  
  export default function GridBlurredBackdrop() {
    return (
    <Container maxW='8xl'>
      <Flex
        textAlign={'center'}
        pt={10}
        justifyContent={'center'}
        direction={'column'}
        width={'full'}
        overflow={'hidden'}>
        <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
          <chakra.h3
            fontFamily={'Work Sans'}
            fontWeight={'bold'}
            fontSize={20}
            textTransform={'uppercase'}
            color={'purple.400'}>
            It's all about my work journey
          </chakra.h3>
          <chakra.h1
            py={5}
            fontSize={48}
            fontFamily={'Work Sans'}
            fontWeight={'bold'}
            color={useColorModeValue('gray.700', 'gray.50')}>
            It's started in 2021
          </chakra.h1>
        </Box>
        <SimpleGrid
          columns={{ base: 1, xl: 2 }}
          spacing={'20'}
          mt={16}
          mb={16}
          mx={'auto'}>
          {testimonials.map((cardInfo, index) => (
            <TestimonialCard {...cardInfo} index={index} />
          ))}
        </SimpleGrid>
      </Flex>
    </Container>
    );
  }
  