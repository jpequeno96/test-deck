FROM mcr.microsoft.com/playwright:v1.54.2-jammy

WORKDIR /app

COPY . .

RUN npm install

RUN npx playwright install chromium

CMD ["npx", "playwright", "test"]
