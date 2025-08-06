# Use the official Playwright image
FROM mcr.microsoft.com/playwright:v1.44.0-jammy

# Set working directory inside container
WORKDIR /app

# Copy project files
COPY . .

# Install dependencies
RUN npm ci
