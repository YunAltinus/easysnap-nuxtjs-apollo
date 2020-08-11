const Query = {
  user: async (parent, args, { User }) => {
    try {
      return await User.findById(args.id);
    } catch (error) {
      throw 'Kullanıcı bulunamadı';
    }
  },
  users: async (parent, args, { User }) => {
    try {
      return await User.find({}).sort({ createdAt: 'desc' });
    } catch (error) {
      throw 'Kullanıcılar bulunamadı';
    }
  },
  activeUser: async (parent, args, { User, activeUser }) => {
    if (!activeUser) {
      return null;
    }
    try {
      return await User.findOne({ username: activeUser.username });
    } catch (error) {
      throw 'Aktif kullanıcı bulunamadı';
    }
  },

  snap: async (parent, args, { Snap }) => {
    try {
      return await Snap.findById(args.id);
    } catch (error) {
      throw 'Metin içeriği bulunamadı';
    }
  },
  snaps: async (parent, args, { Snap }) => {
    try {
      return await Snap.find({}).sort({ createdAt: 'desc' });
    } catch (error) {
      throw 'Metin içeriği bulunamadı';
    }
  }
};

module.exports = Query;
