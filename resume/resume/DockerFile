# Use a Maven image to build the project
FROM maven:3.9.5-eclipse-temurin-17 AS build

# Set working directory inside container
WORKDIR /app

# Copy pom.xml and download dependencies first (caching)
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Copy the rest of the source code
COPY src ./src

# Build the project
RUN mvn clean package -DskipTests

# Use a smaller Java runtime image for running
FROM eclipse-temurin:17-jdk-alpine

# Set working directory
WORKDIR /app

# Copy the built jar from the build stage
COPY --from=build /app/target/*.jar app.jar

# Expose port (set your app port here, default 8080)
EXPOSE 8080

# Run the application
ENTRYPOINT ["java","-jar","app.jar"]
