const getSecretFromDB = async () => {
  // simulate DB latency
  await new Promise((resolve) => setTimeout(resolve, 120));

  const secret = process.env.APPLICATION_SECRET;

  if (!secret) {
    throw new Error(
      "Missing APPLICATION_SECRET environment variable."
    );
  }

  return secret;
};

module.exports = { getSecretFromDB };
