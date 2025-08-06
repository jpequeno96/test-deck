# Use the official lightweight Newman image
FROM postman/newman:alpine

# Set working directory
WORKDIR /etc/newman

# Copy the collection file
COPY api-tests/postman/posts-crud-collection.json .

# Disable SSL verification with --insecure
CMD ["run", "posts-crud-collection.json", "--insecure"]
