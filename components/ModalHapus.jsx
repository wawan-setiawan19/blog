const ModalHapus = ({data, isOpen}) => {
    const { onOpen, onClose } = useDisclosure()
    return(
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight='bold' mb='1rem'>
              Anda yakin mau menghapus {data.title}?
            </Text>
            <Lorem count={2} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={onClose}>
              Ya
            </Button>
            <Button variant='ghost' mr={3} onClick={onClose}>Tidak</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
}

export default ModalHapus;