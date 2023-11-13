import {
  Badge,
  Button,
  Divider,
  HStack,
  Image,
  ListItem,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MdVideoCall } from "react-icons/md";
import { format, getDate, parseISO } from "date-fns";
export default function Event({
  name,
  image,
  about,
  event_date,
  event_start_time,
  event_end_time,
  event_place,
  event_url,
}) {
  const dateObject = parseISO(event_date);
  return (
    <ListItem w="full">
      <Stack
        direction={["column", "column", "row"]}
        px={4}
        justifyContent={"space-between"}
      >
        <HStack align={"start"} spacing={"12"}>
          <VStack>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              {getDate(dateObject)}
            </Text>
            <Text fontSize={"sm"} fontWeight={"light"}>
              {format(dateObject, "MMM")}
            </Text>
          </VStack>
          <VStack align={"flex-start"}>
            <Text fontSize={"sm"} fontWeight={"light"}>
              {format(dateObject, "MMMM dd yyyy")}, {event_start_time} -{" "}
              {event_end_time}
            </Text>
            <Text fontSize={"xl"} fontWeight={"medium"}>
              {name}
            </Text>
            <Badge variant="subtle" colorScheme="purple">
              {event_place}
            </Badge>

            <Text fontWeight={"light"} maxW={"2xl"} fontSize={"sm"}>
              {about}
            </Text>

            <Button
              colorScheme="purple"
              leftIcon={<MdVideoCall size={18} />}
              size="sm"
              as={"a"}
              href={event_url}
              target="_blank"
            >
              Join
            </Button>
          </VStack>
        </HStack>
        <Image
          alignSelf={"flex-end"}
          src={image}
          w="52"
          h="52"
          alt={name}
          rounded={"xl"}
        />
      </Stack>
    </ListItem>
  );
}
