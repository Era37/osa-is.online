FROM rust:1.67
COPY . /app
WORKDIR /app
RUN cargo build --release
CMD ["cargo", "run", "--release"]