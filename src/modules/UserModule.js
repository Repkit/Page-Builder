import AuthService from '@/services/AuthService';
import UserService from '@/services/UserService';

export default {
    state: {
        user: {
            _id: null,
            userName: ''
        }
    },
    getters: {
        isUserLoggedIn: state => !!state.user._id,
        loggedInUser: state => state.user
    },
    mutations: {
        setUser(state, { user }) {
            state.user = user;
        },
        logout(state) {
            state.user = {
                _id: null,
                userName: ''
            }
        }
    },
    actions: {
        updateUser(context, { user }) {
            return UserService.updateUser(user)
                .then(user => user);
        },
        signup(context, { user }) {
            return UserService.addUser({ user })
                .then(user => user);
        },
        login(context, { user }) {
            return AuthService.login(user)
                .then(user => {
                    if (user) {
                        context.commit({ type: 'setUser', user });
                        localStorage.setItem('loggedInUser', JSON.stringify(user));
                    }
                    return user;
                });
        },
        logout(context) {
            return AuthService.logout()
                .then(() => {
                    context.commit({ type: 'logout', });
                    localStorage.removeItem('loggedInUser');
                });
        }
    }
}
