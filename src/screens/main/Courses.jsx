import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { fetchCourses } from "../../services";
import CourseCard from "../../components/courses/CourseCard";
import CoursesSkeleton from "../../components/courses/CoursesSkeleton";
import Error from "../../components/shared/Error";
function Courses() {
  const query = useQuery("courses", fetchCourses);

  if (query.isLoading) {
    return <CoursesSkeleton />;
  }

  if (query.isError) {
    return <Error code={500} message={query.error} />;
  }
  return (
    <Container maxW="container.xl" my={12}>
      <Heading fontSize={{ base: "4xl", md: "5xl" }} textAlign={"center"} mt={12}>Courses</Heading>
      <SimpleGrid mt={12} columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {query.data.map((course) => (
          <CourseCard course={course} />
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default Courses;
