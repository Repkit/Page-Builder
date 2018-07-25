import AuthService from '@/services/AuthService';
import UserService from '@/services/UserService';

export default {
    state: {
        user: {
            userName: '',
            password: '',
            _id: '',
            firstName: '',
            lastName: '',
            image: ''
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
                userName: '',
                password: '',
                _id: '',
                firstName: '',
                lastName: '',
                image: ''
            }
        }
    },
    actions: {
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
        logOut(context) {
            return AuthService.logout()
                .then(() => {
                    context.commit({ type: 'logout', });
                    localStorage.removeItem('loggedInUser');
                })

        }
    }
}
