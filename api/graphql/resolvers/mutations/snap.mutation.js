module.exports = {
  createSnap: async (parent, { data: { user_id, text } }, { Snap, pubsub }) => {
    try {
      await Snap.findOne({ user_id });

      const snap = await new Snap({
        user_id,
        text
      }).save();

      // ilk gmnderi hangi bolgeye ikincisi gonderilecek OBJE
      pubsub.publish('newSnap', { snap });

      return snap;
    } catch (e) {
      throw new Error(e);
    }
  }
};
