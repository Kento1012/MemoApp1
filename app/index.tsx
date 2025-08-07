import { Redirect, router } from 'expo-router';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../src/config';
import { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';

const Index = (): React.JSX.Element => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsAuthenticated(user !== null);
            setIsLoading(false);
            
            if (user !== null) {
                router.replace("/memo/list");
            }
        });

        return () => unsubscribe();
    }, []);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (isAuthenticated) {
        return <Redirect href="/memo/list" />;
    }

    return <Redirect href="/auth/log_in" />;
}

export default Index; 