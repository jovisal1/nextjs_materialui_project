import ApplicationBar from '@/components/ApplicationBar/applicationBar';

export default function Layout({ children }) {
    return (
        <React.Fragment>
            <ApplicationBar />
            {children}
        </React.Fragment>
    );
}
