import ApplicationBar from '@/components/applicationBar';

export default function Layout({ children }) {
    return (
        <React.Fragment>
            <ApplicationBar />
            {children}
        </React.Fragment>
    );
}
