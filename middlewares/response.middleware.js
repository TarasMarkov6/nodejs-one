const responseMiddleware = (req, res, next) => {
  // TODO: Implement middleware that returns result of the query
  if (res.err) {
    if (res.err === 'User not found') {
      return res.status(404).json({ error: true, message: 'User not found' });
    }

    return res.status(400).json({ error: true, message: 'Bad request' });
  }

  if (res.data) {
    return res.status(200).json(res.data);
  }
  next();
};

export { responseMiddleware };
