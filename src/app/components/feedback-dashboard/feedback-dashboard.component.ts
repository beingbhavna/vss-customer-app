import { Component, OnInit } from '@angular/core';
import { FeedbackService, Feedback } from '../../services/feedback.service';

@Component({
  selector: 'app-feedback-dashboard',
  templateUrl: './feedback-dashboard.component.html',
  styleUrls: ['./feedback-dashboard.component.css']
})
export class FeedbackDashboardComponent implements OnInit {
  allFeedbacks: Feedback[] = [];
  displayedFeedbacks: Feedback[] = [];
  totalFeedbacks = 0;
  averageRating = 0;
  ratingDistribution: { rating: number; count: number }[] = [];
  
  filterService = '';
  sortBy = 'newest';
  itemsPerPage = 10;
  currentPage = 1;

  services = [
    'All Services',
    'Electrical Installation',
    'Electrical Maintenance',
    'Repair & Troubleshooting',
    'Home Automation',
    'Industrial Solutions',
    'Electric & Electronic Contracting'
  ];

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit() {
    this.loadFeedbacks();
  }

  loadFeedbacks() {
    this.allFeedbacks = this.feedbackService.getAllFeedbacks();
    this.totalFeedbacks = this.feedbackService.getFeedbackCount();
    this.averageRating = this.feedbackService.getAverageRating();
    this.ratingDistribution = this.feedbackService.getRatingDistribution();
    this.applyFiltersAndSort();
  }

  applyFiltersAndSort() {
    let filtered = [...this.allFeedbacks];

    // Apply service filter
    if (this.filterService && this.filterService !== 'All Services') {
      filtered = filtered.filter(f => f.service === this.filterService);
    }

    // Apply sorting
    if (this.sortBy === 'newest') {
      filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (this.sortBy === 'oldest') {
      filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    } else if (this.sortBy === 'highest-rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (this.sortBy === 'lowest-rating') {
      filtered.sort((a, b) => a.rating - b.rating);
    }

    // Apply pagination
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.displayedFeedbacks = filtered.slice(startIndex, startIndex + this.itemsPerPage);
  }

  onFilterChange() {
    this.currentPage = 1;
    this.applyFiltersAndSort();
  }

  onSortChange() {
    this.currentPage = 1;
    this.applyFiltersAndSort();
  }

  toggleFeedbackDetails(feedback: Feedback) {
    // Can be used to expand/collapse feedback
  }

  deleteFeedback(id: number) {
    if (confirm('Are you sure you want to delete this feedback?')) {
      this.feedbackService.deleteFeedback(id);
      this.loadFeedbacks();
    }
  }

  exportFeedbacks() {
    const csvContent = this.generateCSV();
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `feedback-export-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  }

  private generateCSV(): string {
    const headers = ['Date', 'Customer Name', 'Email', 'Service', 'Rating', 'Message'];
    const rows = this.allFeedbacks.map(f => [
      new Date(f.date).toLocaleDateString(),
      f.customerName,
      f.email,
      f.service,
      f.rating,
      `"${f.message.replace(/"/g, '""')}"`
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');

    return csvContent;
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.applyFiltersAndSort();
  }

  getTotalPages(): number {
    return Math.ceil(this.allFeedbacks.length / this.itemsPerPage);
  }

  getStarArray(rating: number): number[] {
    return Array(rating).fill(0).map((x, i) => i);
  }
}
