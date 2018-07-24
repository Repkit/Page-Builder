import AuthService from '../services/AuthService.js';

export default {
    state: {
        user: {
            username: '',
            _id: ''
        }
    },
    getters: {
        isUserLoggedIn: state => !!state.user._id,
        loggedInUser: state => state.user
    },
    mutations: {
        setUser(state, { user }) {
            state.user = user;
        }
    },
    actions: {
        login(context, { user }) {
            return AuthService.login(user)
                .then(user => {
                    if (user) {
                        context.commit({ type: 'setUser', user });
                        localStorage.setItem('loggedInUser', JSON.stringify(user));
                    }
                    return user;
                });
        }
    }
}
